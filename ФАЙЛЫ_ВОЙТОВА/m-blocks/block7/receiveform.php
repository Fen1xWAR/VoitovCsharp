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
   $va=  $GLOBALS["_GET"];
   $name= $va["name"];
   $age= $va["age"];
   $dd= $va["day"];
echo"<li>Получена фамилия: $name"; 
echo"<li>Получен возраст:  $age";
echo"<li>Получен день: $dd";
?>

</body>
</html>