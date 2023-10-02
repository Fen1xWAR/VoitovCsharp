<HTML>
<HEAD><TITLE> Создания таблиц с помощью функций </TITLE>
</HEAD>
<BODY>
<h2>2Создания таблиц HTML с помощью функций и циклов</h2>

 <h3>Пример 1. Создание тадлицы. </h3>  
  <table name='tb4' border=1 cellpadding=1 cellspacing=0>
  <?
  
  $gt=$GLOBALS["_GET"];
  $N=$gt["N"];  $M=$gt["M"]; 
  if ($N=="") $N=5;
  if ($M=="") $M=5;

  // $i - соответствует номеру строки $j - соответствует номеру столбца

  for ($i=1; $i<=$N; $i++) {
      echo"<tr>";
      for($j=1; $j<=$M; $j++) {
          $d = rand(1,2);
          if ($j == $M-$i+1){
              $d = 0;
          }
         if ($j == $i ){
             $d = 3;
         }

         $ss = "<img src=$d" . ".jpg width=70 height=70 >";
         echo"<td> $ss </td>";
      }
      echo"</tr>";
  }
  ?>

  </table>
</BODY>
</HTML>
