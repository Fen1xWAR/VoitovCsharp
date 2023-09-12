<html>
<HEAD>
  <TITLE>Пример на работу с массивами</TITLE>
</HEAD>
<body>

<?

foreach ( $NPs as $k => $v) echo "   ! $k=>$v !";



echo "<h3>Перебор массива \$GLOBALS </h3> ";
 foreach ( $GLOBALS as $k => $v) {

    echo "   ! $k -- $v !";
    $W =$v;


    foreach ( $W as $m => $n) {
      echo "   ! $m  -- $m !";
    }
 }

?>

</body>
</html>
