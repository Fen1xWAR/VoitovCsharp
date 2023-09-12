<HTML>
<HEAD><TITLE>Рабора с базами данных (СУБД MYSQL) </TITLE>
</HEAD>
<BODY>

<? 
   echo "<h2> *** ПРОГРАММА РАБОТЫ С БАЗОЙ ДАННЫХ *** </h2>";

   $dblocation = "localhost"; 
   //$dbname = "dmdb"; 
   $dbuser = "root"; 
   $dbpasswd = ""; 
   $dbcnx = @mysql_connect($dblocation, $dbuser, $dbpasswd); 
   //$r = mysql_connect("localhost");
   echo mysql_error(); 
   //$r = mysql_select_db("VDB1");   
   $r = mysql_select_db("dmdb");   
   echo mysql_error(); 

  function dodb() {
    echo "<h3>Пример. Создание базы данных dmdb</h3>";
    @mysql_query("create database dmdb");    //
    $r= mysql_error();
    if ($r=="Can't create database 'dmdb'; database exists")
    echo "Такая база данных уже существует. Выполните следующую операцию.";
    else echo mysql_error();
  }

  function opendb($dmdb) {
    echo "<li> *** СЕЙЧАС МЫ ОТКРОЕМ БАЗУ ДАННЫХ $dmdb *** ";
    $r = mysql_select_db($dmdb);  
    echo mysql_error();
    echo "<li> *** ЕСЛИ НЕ БЫЛО СООБЩЕНИЯ ОБ ОШИБКАХ, ТО БАЗА ДАННЫХ $dmdb ОТКЫТА *** <br><br> ";
  }

  // Создать таблицу $tb
  function do_tb($tb) {
    echo "<h3>Пример. Создание и просмотр таблицы базы данных.</h3>";
    @mysql_query("drop table $tb");    // удаляем таблицу
    $sq  = "create table $tb(id int ,name VARCHAR(250) ,idup int ,lev int ";
    $sq .= " )   ";

    $r=  mysql_query($sq);             // создаем таблицу
    $er= mysql_error();
    if ($er!="") echo "<LI> 1 er=$er r=$r  sq=$sq ";

    $r= mysql_query("insert into $tb(id,name,idup,lev) values('1','Тема 1','0','0') ");   
    $r= mysql_query("insert into $tb(id,name,idup,lev) values('2','Тема 2','0','0') ");   
    $r= mysql_query("insert into $tb(id,name,idup,lev) values('3','Тема 3','0','0') ");   
    $r= mysql_query("insert into $tb(id,name,idup,lev) values('4','Тема 4','0','0') ");   
    $r= mysql_query("insert into $tb(id,name,idup,lev) values('5','Тема 5','0','0') ");   

    $r= mysql_query("select * from  $tb ");  
    $how= mysql_num_rows($r);  

    for($i=0; $i < $how; $i++)   
    {  
      $f=mysql_fetch_array($r);   
      @$wid  = $f[id];
      @$name = $f[name];
      @$idup = $f[idup];
      @$lev  = $f[lev];
      echo "<li> id= $wid, name= $name  idup=$idup lev=$lev ";
    }
  }


  // Просмотреть таблицу $tb
  function look_tb($tb) {
    $q= "select * from $tb ";
    $r= mysql_query($q);  
    $how= mysql_num_rows($r);  
    echo "<h3> *** ПРОСМОТР ТАБЛИЦЫ $tb ***</h3>";
    echo "<h4> функция look_tb найдено число записей (how)=$how </h4>";

    for($i=0; $i < $how; $i++)   
    {  
      $f=mysql_fetch_array($r);   
      @$wid  = $f[id];
      @$name = $f[name];
      @$idup = $f[idup];
      @$lev  = $f[lev];
      echo "<li> id= $wid, name= $name  idup=$idup lev=$lev ";
    }
  }

  //do_tb("bibtema");
  // 2. СЕЙЧАС МЫ ОТКРОЕМ БАЗУ ДАННЫХ $dmdb
  //opendb("dmdb");
  look_tb("bibtema");
  //dodb();
?>

</BODY>
</HTML>
