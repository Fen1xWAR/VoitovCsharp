<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Таблица</title>
</head>
<body>
<?
$header = $_GET["header"];
$m = $_GET["M"];
$n = $_GET["N"];

$numbers[$m][$n] = array();
for ($i = 1; $i<=$m; $i++) {
    for ($j = 1; $j <= $m; $j++) {
        $numbers[$i][$j] = rand(0,10);
    }
}
echo " <table>
<caption>$header</caption>";
for ($i = 1; $i<=$m; $i++){
    echo " <tr>";
    for ($j =  1; $j<=$n; $j++){

        $ss = $numbers[$i][$j];
        if ($i == $j){
            $ss = max($numbers);
        }
        if ($j == $m-$i+1){
            $ss = min($numbers);
        }
        echo "<td>".$ss."</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
</body>
</html>