<?php
$link = mysqli_connect('localhost', 'root', 'Aa220377!', 'Eto basa');
if (!$link) {
    die('Could not connect: ' . mysqli_error());
} 
echo "Соединение установлено  <br>";
$sql = "SELECT id, name FROM Employee";
$result = $link->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . "<br>";
    }
} else {
    echo "0 results";
}
mysqli_close($link);

?>