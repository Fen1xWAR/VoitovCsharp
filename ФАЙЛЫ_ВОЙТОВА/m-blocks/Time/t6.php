
<HTML>
 <HEAD>
   <META http-equiv="Content-Type"    content="text/html; charset=windows-1251">
   <TITLE>TEST 6</TITLE>
     <script src="t6.js" type="text/javascript" encoding="UTF-8"></script>
   <SCRIPT language=JavaScript>
<?	      
   $va=  $GLOBALS["_GET"];
   $user=  $va["user"];
   $mids=  $va["mids"];
   $id_N=  $va["id_N"];
   $zvuk=  $va["zvuk"];
   if(IsSet($user)) {echo "var user=$user;";}
   else { echo "var user=0;"; }
   if(IsSet($user)) {echo "var mids=$mids;";}
   else { echo "var mids=0;"; }
   if(IsSet($user)) {echo "var id_N=$id_N;";}
   else { echo "var id_N=0;"; }
   if(IsSet($zvuk)) {echo "var zvuk=$zvuk;";}
   else { echo "var zvuk=1;"; }

   $VRET= $va["VRET"];
   if(IsSet($VRET)) {echo "var VRET=$VRET;";}
   else { echo "var VRET=0;"; }
   $VV1= $va["VV1"];
   if(IsSet($VV1)) {echo "var VV1=$VV1;";}
   else { echo "var VV1=0;"; }
   $VV2= $va["VV2"];
   if(IsSet($VV2)) {echo "var VV2=$VV2;";}
   else { echo "var VV2=0;"; }
   $VV3= $va["VV3"];
   if(IsSet($VV3)) {echo "var VV3=$VV3;";}
   else { echo "var VV3=0;"; }   
?>

   </SCRIPT>

   <style type= "text/css">
        input[type="button"]{ display: block; width: 4em; height: 4em;}
        p { color:blue }
   </style>

 </HEAD>

 <BODY  >
  <H2>  === ТЕСТ Visual WM   6 ===
   <input style="border:0;" id=idlook size=5 type="text" value="" onClick=lChange() >
   <a   href='index.php'>выход</a>
  </H2>


<?
if ($zvuk) echo "
 <DIV id=IDbeep style='position:absolute; top:400; left:100; height:100; width:80%'>
  <embed src='beep.wav' autostart='false' width='0' height='0' id='beep'
   enablejavascript='true'>
 </DIV>
";
?> 



  <DIV style="position:absolute; top: 50; left:90; height: 40; width:400; font-size:10; color:black;">
   <table border=0 align=left width="50%">
    <tr>
     <td><input type="button" style="display:block; width:80; height:34; background:silver;" 
              value="Start" onclick=T6ButtonClick(); id=idB > </td>
     <td><p id="NPR" style="display:none;" >№____</p></td>
    </tr>
   </table>
   <br><br> 
  </DIV>


  <DIV id=DIVREZ style="display:none; position:absolute; top:90;  height:100; width:90%">
    <font size="7" color="red">
     <p id=T6REZ  align=center > </p>
    </font>
  </DIV>


  <DIV id=NPanel style="display:none;position:absolute; top:90;  height:100; width:90%">
    <font size="4" color="blue">
     <p id=T6ZLabel  align=center >  </p>
     <table border=0 align=center width=160>
       <tr>
        <td><input type="button" id="Pn00";  onclick=iset("Pn00"); ></td>
        <td><input type="button" id="Pn01";  onclick=iset("Pn01"); ></td>
        <td><input type="button" id="Pn02";  onclick=iset("Pn02");></td>
        <td><input type="button" id="Pn03";  onclick=iset("Pn03"); ></td>
       </tr>
       <tr>
        <td><input type="button" id="Pn10";  onclick=iset("Pn10"); ></td>
        <td><input type="button" id="Pn11";  onclick=iset("Pn11"); ></td>
        <td><input type="button" id="Pn12";  onclick=iset("Pn12"); ></td>
        <td><input type="button" id="Pn13";  onclick=iset("Pn13"); ></td>
       </tr>
       <tr>
        <td><input type="button" id="Pn20";  onclick=iset("Pn20"); ></td>
        <td><input type="button" id="Pn21";  onclick=iset("Pn21"); ></td>
        <td><input type="button" id="Pn22";  onclick=iset("Pn22"); ></td>
        <td><input type="button" id="Pn23";  onclick=iset("Pn23"); ></td>
       </tr>
       <tr>
        <td><input type="button" id="Pn30";  onclick=iset("Pn30"); ></td>
        <td><input type="button" id="Pn31";  onclick=iset("Pn31"); ></td>
        <td><input type="button" id="Pn32";  onclick=iset("Pn32"); ></td>
        <td><input type="button" id="Pn33";  onclick=iset("Pn33"); ></td>
       </tr>

       <tr><th align=left colspan=4>
             <input type="button" id="Pn40";  onclick=iset("Pn40");  
              style="color:blue; display:block; width:110; height:4em;">
           </th>
       </tr>

     </table>
    </font>
  </DIV>

<!---
-->
  <DIV id=idadd style="display:none; position:absolute; top:400; left:10; height:60; width:200">
   <table border=0 align=left width=160>
    <tr> 
     <td>  
      <input style="display:block; width:80; height:34;  background:silver;" 
             type="button" value="calc" onclick=calc(); id=idcalc > 
     </td>
     <td>
      <input style="display:block; width:80; height:34;  background:silver;"
             type="button" value="prqq" onclick=prqq(); id=idPR >                 
     </td>

     <td>
      <input style="display:block; width:80; height:34;  background:silver;"
             type="button" value="Inf" onclick=inf("idinf"); id=idinf >                 
     </td>
<!--
     <td>
      <input type="button" value="Beep" id=idbuttonbeep onclick="PlaySound('beep')"/>
     </td>
-->
    </tr> 
  </DIV>

<!--
  <DIV id=IDINF style="display:none; position:absolute; top:100; left:500; height:600; width:200">
   <textarea id="tar1" rows=10 cols=50  >
        
   </textarea>
  </DIV>
-->

 </BODY  >
</HTML>
