<HTML>
<HEAD><TITLE> Создания таблиц с помощью функций </TITLE>
</HEAD>
<BODY>
<h2>Создания таблиц HTML с помощью функций и циклов</h2>
<?
  function doTbMulty($a10) {
  echo"<table name='tb4' border=1 cellpadding=1 cellspacing=0>";
  // $i - соответствует номеру строки $j - соответствует номеру столбца
  for ($i=1; $i<=5; $i++) {
      echo"<tr>";
      for($j=1; $j<=$a10; $j++) {
         $s= " $i * $j = " . $i * $j . "<br>";
         echo"<td> $s </td>";
      }
      echo"</tr>";
  }

  for ($i=6; $i<=10; $i++) {
      echo"<tr>";
      for($j=1; $j<=$a10; $j++) {
         $s= " $i * $j = " . $i * $j . "<br>";
         echo"<td> $s </td>";
      }
      echo"</tr>";
  }
  echo"</table>";
 }

 echo "<h3>Пример 1. Таблица умножения. </h3>";
 doTbMulty(9);

?>

<?
  function doTbM2($a10,$b10) {
  echo"<table name='tb6' border=1 cellpadding=1 cellspacing=0>";
  // $i - соответствует номеру строки $j - соответствует номеру столбца
  for ($i=1; $i<=$a10; $i++) {
      echo"<tr>";
      for($j=1; $j<=$b10; $j++) {
         $s= " $i * $j = " . $i * $j . "<br>";
         echo"<td> <font size=2 color=#ff0000>$s</font> </td>";
      }
      echo"</tr>";
  }

  echo"</table>";
 }

 echo "<h3>Пример 2. Таблица умножения. </h3>";
 doTbM2(10,10);

?>



<?
  function doTbSt($a,$b) {
  echo"<table name='tb7' border=1 cellpadding=1 cellspacing=0>";
  for ($i=1; $i<=$a; $i++) {
      echo"<tr>";
      for($j=1; $j<=$b; $j++) {
         $s= " $j^$i= " . pow($j, $i) . "<br>";
         echo"<td><font size=1 color=#0000ff> $s </font></td>";
      }
      echo"</tr>";
  }

  echo"</table>";
 }

 echo "<h3>Пример 3. Таблица степеней</h3>";
 doTbSt(10,11);
?>

<? // Пример 4. 
   // Заносим столбец строки в одну ячейку
   function dof($m) {
     echo "<td>";
     for ($i=1; $i<= 10; $i++)  {
        $s = $m . " * " . $i . " = " . $m * $i;
        echo " $s <br>";
     }
     echo "</td>";
   }
?>

<h3>Пример 4. Таблица умножения в виде строки из нескольких ячеек. </h3>
<table border="1" width=600  >
<tr>
<? 
  for ($i=1; $i<=7; $i++) {
      dof($i); 
  }
?>
</tr>
</table>


</BODY>
</HTML>
