<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="createDB">
    <input type="submit" value="CreateDB">
</form>
<br>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="createTable">
    <input type="submit" value="CreateTable">
</form>
<br>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="readTable">
    <input type="submit" value="ReadTable">
</form>
<br>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="removeDB">
    <input type="submit" value="RemoveDB">
</form>
<br>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="addHobby">
    <label for="hobbyName">HobbyName:
        <input name="hobbyName" value="Hockey" type="text">
    </label>

    <input type="submit" value="AddHobby">
</form>
<form action="bd.php" method="get">
    <input type="hidden" name="mode" value="sqlExecute">
    <label>
        <textarea name="sql" rows=2 cols=60></textarea>
    </label>
    <input type="submit" value="sqlExecute">
</form>
<?php

?>
</body>
</html>

