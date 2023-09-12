<html>
<HEAD>
  <TITLE>file</TITLE>
</HEAD>
<body>
<h3>!Тег input с типами: text, password, checkbox, file</h3>
<form action=receiveform.php method="post">
<p>Файл<input type="file" name="namef"  ></p>
<input type="submit" value="Отправить"  >
</form>

<h2> Функции работы с файлами </h2>
<?
  // чтение файла (1-й способ)
  echo("<h3>Выполняем функцию readfile</h3>");
  echo("<textarea rows=5 cols=20  >");
    readfile ("1.txt");
  echo("</textarea>");

  echo "<br>";
 
  // чтение файла (2-й способ)
  $file = fopen("2.txt","rb");
  //$file = fopen("2.jpg","rb");
  if(!$file)
    {
      echo("Ошибка открытия файла");
    }
  else
    { 
      echo("<h3>Выполняем функцию fpassthru</h3>");
      echo("<textarea rows=5 cols=20  >");
      fpassthru($file);
      echo("</textarea>");
    }
?>

</body>
</html>