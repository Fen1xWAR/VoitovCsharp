<?php
$host = 'localhost';
$user = 'root';
$password = 'Aa220377';
$dbName = 'Users';
try {
    $dsn = "mysql:host=$host";
    $pdo = new PDO($dsn, $user, $password);
    $mode = $_GET['mode'];
    switch ($mode) {
        case 'createDB':
            CreateDB($pdo, "Users");
            break;
        case 'createTable':
            CreateTable($pdo, 'Users', 'Hobby');
            break;
        case 'addHobby':
            $hobbyName  =  $_GET['hobbyName'];
            if ($hobbyName != ''){
                insertHobby($pdo, 'Users', $_GET['hobbyName']);
            }
            else{
                throw new PDOException('HobbyName is empty');
            }
            break;
        case 'readTable':
            ReadTable($pdo, 'Users', 'Hobby');
            break;
        case 'removeDB':
            RemoveDb($pdo,"Users");
            break;
        case 'sqlExecute':
            $sql = $_GET['sql'];
            if($sql != ''){
                SqlExecute($pdo,"Users",$sql);
            }
            else{
                throw new PDOException('SQL is empty!');
            }

            break;
        default:
            echo "Invalid arguments";
    }

//    CreateDB($pdo,$dbName);
//    CreateTable($pdo,'Users','Hobby');
//    insertHobby($dbName,$pdo,'Hockey');
//
//    ReadTable($pdo,$dbName,"Hobby");


} catch (PDOException $e) {
    echo $e->getMessage();
}
function CreateDB($connection, $dbName) : void
{
    try {
        $prepare = $connection->prepare("CREATE DATABASE $dbName");
        $prepare->execute();
        echo "BD created";
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

}

function CreateTable($connection, $dbName, $tableName) : void
{
    try {
        $connection->query("USE $dbName");
        $sql = "CREATE TABLE $tableName(
                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                hobbyName VARCHAR(30) NOT NULL,
                PRIMARY KEY (id)  
                  )";
        $connection->exec($sql);
        echo "Table created!";
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

}

function insertHobby($conn, $dbname, $hobbyName): void
{
    try {
        $sql = "INSERT INTO Hobby (hobbyName) VALUES('$hobbyName') ";
        $conn->query("use $dbname");
        $conn->exec($sql);
        echo "Data Inserted";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
}

function ReadTable($conn, $dbName, $tableName): void
{
    try {
        $conn->query("USE $dbName");
        $users = $conn->query("SELECT * from $tableName")->fetchAll(PDO::FETCH_DEFAULT);
        foreach ($users as $user) {
            echo "
            <div>
                <div> ID: " . $user[0] . "</div>
                <div> Hobby Name: " . $user[1] . "</div>
            </div>
            <br>";
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

}
function RemoveDb($conn,$dbName) : void{
    try{
        $conn->query("drop schema $dbName");
        echo "DB successfully dropped";
    }
    catch (PDOException $e){
        echo $e->getMessage();
    }
}
function SqlExecute($conn,$pdName,$sql) : void{
    $conn->query("USE $pdName");
    $result = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);
    var_dump( $result);
}