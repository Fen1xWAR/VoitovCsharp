<HTML>
<HEAD><TITLE>Работа с базами данных (СУБД MYSQL) </TITLE>
</HEAD>
<BODY>
<?php
   $va=  $GLOBALS["_GET"];
   $mode= $va["mode"];
   $id= $va["id"];  $fio= $va["fio"]; $cp= $va["cp"]; $gr= $va["gr"];

   echo "<h3> *** ПРОГРАММА РАБОТЫ С БАЗОЙ ДАННЫХ   *** </h2>";
   $dblocation = "localhost"; 
   $dbuser = "root"; 
   $dbpasswd = ""; 
   $dbcnx = @mysql_connect($dblocation, $dbuser, $dbpasswd); 
   echo mysql_error(); 
   $r = mysql_select_db("dmdb");   
   echo mysql_error(); 

  function dodb() {   // Создание базы данных
    echo "<h3>Пример. Создание базы данных dmdb</h3>";
    @mysql_query("create database dmdb");    //
    $r= mysql_error();
    if ($r=="Can't create database 'dmdb'; database exists")
    echo "Такая база данных уже существует. Выполните следующую операцию.";
    else echo mysql_error();
    echo "<br>";
  }

   function addpersons($id,$fio,$cp,$gr) {  //Добавление в таблицу spersons
    $d= time();    
    $sq="insert into spersons(id_Pers,fio,cp,d,gr) values('$id','$fio','$cp', '$d','$gr') "; 
    $r= mysql_query($sq); 
    echo mysql_error();
  }  
   
   function do_tbpersons($id,$fio,$cp) {  // Создание таблицы spersons
    echo "<h3>Пример.  Создание и просмотр таблицы базы данных  spersons.</h3>";
    @mysql_query("drop table spersons");    // удаляем таблицу

     $sq= 'create table spersons(id_Pers int, fio VARCHAR(60), cp int, d int, gr VARCHAR(12) )'; 
    $r=  mysql_query($sq);             // создаем таблицу
    echo mysql_error();

    $d= time();  $gr="sys";    
    $sq="insert into spersons(id_Pers,fio,cp,d,gr) values('$id','$fio','$cp', '$d','$gr') "; 
    $r= mysql_query($sq); 
    echo mysql_error();

    $sq= 'select * from  spersons ';
    $r=  mysql_query($sq);  
    $how= mysql_num_rows($r);  // 71
    echo mysql_error();
    echo "<br> Содержание таблицы spersons: ";    
    for($i=0; $i < $how; $i++)   
    {  
      $f=mysql_fetch_array($r);   
      @$wid  = $f[id_Pers];
      @$fio  = $f[fio];
      @$wcp  = $f[cp];
      @$wd  = $f[d];
      @$wgr  = $f[gr];
      $sd= date("d-M-Y",$wd);
      echo "<li> создано:  id= $wid, fio= $fio, cp= $wcp d=$wd  sd=$sd  gr=$gr";
    }
     echo "<br>";
   } 
 
  function look_tb($tb) {   // Просмотреть таблицу $tb
    $q= "select * from $tb ";
    $r= mysql_query($q);  
    $how= mysql_num_rows($r);  
    echo "<h3> *** ПРОСМОТР ТАБЛИЦЫ $tb ***</h3>";

    for($i=0; $i < $how; $i++)   
    {  
      $f=mysql_fetch_array($r);   
      @$wid  = $f[id_Pers];
      @$fio  = $f[fio];
      @$wcp  = $f[cp];
      @$wd  = $f[d];
      @$wgr  = $f[gr];
      $sd= date("d-M-Y",$wd);
      echo "<li> найдено:  id= $wid, fio= $fio, cp= $wcp d=$wd  sd=$sd  gr=$wgr";
    }
    echo "<br>";
  }

  // Набор  функций для работы с базой  
  // 1.  Создаётся база данных
  if ($mode==1) dodb();
  // 2. создавются таблицы: spersons     
   if ($mode==2)  { 
      $id=1;  $FIO="Admin";   $cp=2014;
      do_tbpersons($id,$FIO,$cp);
   }
  // 3. Читаем таблицу spersons
  if ($mode==3) look_tb("spersons");
  // 4. Добавить персону spersons
  if ($mode==4) addpersons("$id","$fio","$cp","$gr");
?>

 <SCRIPT language=JavaScript>

function getvalue(id) {
  var S1; var objid= document.getElementById(id);
  S1= objid.value;      return S1;
}

  function  jgodb(md) {
     var pgoto= "db.php?mode="+md;
     if (md==4) pgoto+="&id="+getvalue('idid')+"&fio="+getvalue('idfio')+"&cp="+getvalue('idcp')+"&gr="+getvalue('idgr');  
    window.location=pgoto; 
 }

 </SCRIPT >
<br>
<input type=button value="Создание базы данных" onclick= jgodb(1)  >
<input type=button value="Создание таблицы spersons" onclick=jgodb(2) >
<input type=button value="Чтение таблицы spersons" onclick=jgodb(3) >
<br><input type=button value="Добавить персону" onclick=jgodb(4) >
id:<input type=text id=idid value="" size=5 >
fio:<input type=text id=idfio value="" size=3 >
cp:<input type=text id=idcp value="" size=3 >
gr:<input type=text id=idgr value="" size=3 >
</BODY>
</HTML>
