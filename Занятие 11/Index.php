<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

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
            echo "    <td><img src=$imgS alt='' width=70 height=70></td>";
        }
        echo "</tr>";
    }
    echo "</table>";
?>
</body>
<script !src="">
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function Shuffle(){
       let collection = document.querySelectorAll('img')
        collection.forEach(el=> {
            el.src = getRandomInt(3) + ".jpg"
        })
    }
</script>
</html>

