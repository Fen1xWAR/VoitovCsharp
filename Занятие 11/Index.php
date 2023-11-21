<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>

</head>
<body>
<button onclick="setInterval(Shuffle,1000)">Shuffle</button>
<?php
//    $M = $_GET['M'];
//    $N = $_GET['N'];
$M = 7;
$N = 7;

    echo "<table>";

    for($i = 0;$i<$M; $i++){
        echo "<tr>";
        for($j= 0; $j<$N; $j++){
            $imgS = random_int(0, 3).".jpg";
            $img = "<img src=$imgS alt='' width=70 height=70>";
            $t = 't'.$i+$j;
            echo "<td><p>$t</p>$img</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
?>
</body>
<script>
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function Shuffle(){
       let collection = document.querySelectorAll('img')
        collection.forEach(el=> {
            el.src = getRandomInt(4) + ".jpg"
        })
    }
</script>
</html>

