<!DOCTYPE HTML PUBLIC "=//W3C//DTD HTML 4.01 //EN http://www.w3.org/TR/HTML4/strict.dtd">
<html>
<HEAD><TITLE>Пример получения данных</TITLE>
</HEAD>
<body>
 <h3>Пример получения данных из документа sendform.html</h3>
 <p align="center">
  <font color="red"> 
  Этот пример должен показывать, что без подключения Web-сервера 
  передача данных не производится.
  </font>
 </p>
<?

   $name= $_GET["name"];
   $age= $_GET["age"];
   $surname = $_GET["surname"];
   $city = $_GET["city"];
echo"<li>Получена имя: $name";
echo"<li> Получена фамилия: $surname";
echo"<li> Получен город: $city";
echo"<li>Получен возраст:  $age";
?>
<?
    echo "Hello"

?>
</body>
</html>