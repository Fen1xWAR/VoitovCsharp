<!DOCTYPE HTML PUBLIC "=//W3C//DTD HTML 4.01 //EN http://www.w3.org/TR/HTML4/strict.dtd">
<html>
<head>
 <title>Пример простой формы для передачи данных</title>
</head>
<body>
 <H2>Пример формы для передачи данных</H2>
 <form action=receiveform.php method=GET>
     <label for="name">Введите имя:</label>
    <input type=text name="name" placeholder="Имя"><br>
     <label for="surname">Введите фамилию:</label>
     <input type=text name="surname" id="surname" placeholder="Фамилия"><br>
     <label for="city">Родной город:</label>
     <input type=text name="city" id="city" placeholder="Родной город"><br>
     <label for="age">Возраст:</label>
 <input type=text name="age" id="age" placeholder="Возраст" ><br>
 <input type=submit value="Нажмите кнопку!"><br>
 </form>
</body>
</html>

