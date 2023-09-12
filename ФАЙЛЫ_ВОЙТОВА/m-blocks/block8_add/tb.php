<HTML>
<HEAD><TITLE> Создания таблиц с помощью функций </TITLE>
</HEAD>
<BODY>
<h2>Создания таблиц HTML с помощью функций и циклов</h2>

<?
  $N=7; $M=10;  
  function doTbMulty($N,$M) {
  echo"<table name='tb4' border=1 cellpadding=1 cellspacing=0>";
  // $i - соответствует номеру строки $j - соответствует номеру столбца
  $k=1;
  for ($i=1; $i<=$N; $i++) {
      echo"<tr>";
      for($j=1; $j<=$M; $j++) {
         $s= $k *$k;
         echo"<td> $s </td>";
         $k++;
      }
      echo"</tr>";
  }

  echo"</table>";
 }

 echo "<h3>Пример 1. Создание тадлицы. </h3>";
 doTbMulty($N,$M);

?>

</BODY>
</HTML>
