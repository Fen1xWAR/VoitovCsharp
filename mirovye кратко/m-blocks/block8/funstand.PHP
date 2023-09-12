<HTML>
<HEAD><TITLE> Математические функции </TITLE>
</HEAD>
<BODY>

<? 
  echo "<h3>Пример 1. Функции округления round и ceil </h3>";
  echo "<h4> Функция округления round </h4>";
  $r = round(3.4);
  echo " round(3.4) =$r <br>";
  $r = round(3.5);
  echo " round(3.5) =$r <br>";
  $r = round(3.6);
  echo " round(3.6) =$r <br>";
  $r = round(2.4);
  echo " round(2.4) =$r <br>";
  $r = round(2.5);
  echo " round(2.5) =$r <br>";
  $r = round(2.6);
  echo " round(2.6) =$r <br>";

  echo "<h4> Функция округления ceil</h4>";
  $r = ceil(3.2);
  echo " ceil(3.2) =$r <br>";
  $r = ceil(3.7);
  echo " ceil(2.7) =$r <br>";
  $r = ceil(2.2);
  echo " ceil(2.2) =$r <br>";
  $r = ceil(2.7);
  echo " ceil(2.7) =$r <br>";

  echo "<br><br>";

  echo "<h3>Пример 2.  \$i и \$I - разные переменные </h3>";
  echo " присвоим:  \$i= 1;  \$I= 2; <br>";
  $i= 1;  $I= 2;
  echo "результат: i=$i I=$I <br><br>";


  echo "<h3>Пример 3. Случайные числа. Функции mt_rand mt_srand.
            Генерируем 5000 случайных чмсел от 0 до 100. Сумму делим на 5000. </h3>";
  mt_srand(time() + (double)microtime() * 1000000);
  $sum= 0;
  for ($i=0; $i<5000; $i++) $sum+= mt_rand(0,100);
  echo " sum = $sum <br>";
  $sum= $sum/5000;
  echo " sum/5000 = $sum <br>";



  echo "<h3>Пример 4. Получение даты в формате.  </h3>";
  // дата: 
  $d= date("d.m y");
  echo "текущая дата: $d  года<br> \n";

?>

</BODY>
</HTML>
