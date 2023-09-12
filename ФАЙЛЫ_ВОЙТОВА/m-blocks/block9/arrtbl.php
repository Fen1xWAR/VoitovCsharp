<HTML>
<HEAD><TITLE> Создание таблиц с помощью массивов</TITLE>
</HEAD>
<BODY>

<h2> Примеры создания таблиц с помощью массивов</h2>

<?
  echo "<h3>Пример 1. Коды символов (\$Chars[\$x][\$y]= array(\$i,chr(\$i))) </h3>";
  for ($i=0, $x=0; $x<16; $x++) {
    for ($y=0; $y<16; $y++) {
      $Chars[$x][$y]= array($i,chr($i));
      $i++;
    }
  }
?>

<!-- <? $q="werty";?>   <?=$q?>  -->
<table name="tb1" border=1 cellpadding=1 cellspacing=0>
<?for ($y=0; $y<16; $y++) {?>
  <tr>
  <?for($x=0; $x<16; $x++) {?>
    <td>
      <?=$Chars[$x][$y][0]?>:
      <b><tt>
           <?= $Chars[$x][$y][1]?>
      </tt></b>
    </td>
  <?}?>
  </tr>
<?}?>
</table>


<!-- -->
<h3>Пример 2. Коды символов. </h3>
<table name="tb2" border=1 cellpadding=1 cellspacing=0>
<?for ($i=0; $i<16; $i++) {?>
  <tr>
  <?for($j=0; $j<16; $j++) {?>
    <td>
      <?
         $c= $Chars[$i][$j][0];
         echo"$c:";
      ?>
      <b><tt>
      <?
         $c= $Chars[$i][$j][1];
         echo"$c";
      ?>
      </tt></b>
    </td>
  <?}?>
  </tr>
<?}?>
</table>

<!-- -->

<?
  function doChars($Chars) {
   echo"<table name='tb3' border=1 cellpadding=1 cellspacing=0>";
   for ($i=0; $i<16; $i++) {
      echo"<tr>";
      for($j=0; $j<16; $j++) {
         $w= $Chars[$i][$j][0];  $c= $Chars[$i][$j][1];
         echo"<td>$w:$c </td>";
      }
      echo"</tr>";
   }
   echo"</table>";
  }

 echo "<h3>Пример 3. Коды символов (в виде функции) </h3>";
 doChars($Chars);
?>

</BODY>
</HTML>
