<HTML>
<HEAD><TITLE> Создания таблиц с помощью функций </TITLE>
</HEAD>
<BODY>
<h2>Создания таблиц HTML с помощью функций и циклов</h2>

<?
  $N=7; $M=11;  
  function doTbMulty($N,$M) {
  echo"<table name='tb4' border=1 cellpadding=1 cellspacing=0>";
  // $i - соответствует номеру строки $j - соответствует номеру столбца
  $k=0;
  for ($i=1; $i<=$N; $i++) {
      echo"<tr>";
      for($j=1; $j<=$M; $j++) {
         $d=  $k % 4;
         $ss = "<img src=$d" . ".jpg width=70 height=70 >";
         echo"<td> $ss </td>";
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
