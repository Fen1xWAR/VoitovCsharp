<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        <h1>Таблица квадратов</h1>
<table style="border-collapse: collapse">
    <?
    for ($i = 1; $i<= 10; $i++){
        echo "<tr>";
        for ($j= 1; $j<= 10; $j ++){
            $result = pow($i, $j);
            echo " <td style='border: 1px black solid'>$result</td>";
        }
    }
    ?>
</table>
</body>
</html>
