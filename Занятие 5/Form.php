<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Форма</title>
</head>
<body>
<form action="Table.php" method="get">
    <label for="header">Заголовок</label>
    <input id="header" required name="header" type="text">
    <label for="m">Число строк (M)</label>
    <input id="m"  name="M" required type="number">
    <label for="n">Число столбцов (N)</label>
    <input id="n" name="N" required type="number">
    <input type="submit" value="Начать">
</form>
</body>
</html>