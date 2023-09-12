var vizlook=0;

var st=document.getElementById("st"); //стимул
var deb=document.getElementById("deb"); //отладочная информация
var instr=document.getElementById("instr"); //инструкция для пользователя

var t = new Array(); //стимулы(номера ячеек в матрицах)
var n = new Array(); //массив, для хранения случайных неповторяющихся чисел
var dlina = new Array(); //длина блока проб текущего стимула
var proba = new Array(); //номер пробы для текущего стимула
var vospr_stim = new Array(); //воспроизведенные стимулы


var massiv = new Array(); //текущий массив со стимулами

//переменная со значениями: cifri, bukvi, slova, от нее зависят генерируемые номера стимулов (буквы 0-18, слова 0-259 и т.д.)
var type="slova";  //тип стимулов (слова, цифры, буквы)
//массив зо значениями: sog_bukvi, con_slova, abs_slova, pse_slova, используется только для букв и слов
massiv=con_slova_1s; //массив со стимулами (конкретные слова, абстрактные слова, псевдослова, цифры (0-9), согласные буквы)



var pr_stim=0, pr_prob=0, max_dlina=0; // правильно воспроизведенные стимулы, пробы; максимальная длина правильно воспроизведенного блока проб

var MS=1000;   //интервал (время предъявления и т.д.), мс

var stimul=-1;

var n_vospr=0;

var vosproizvedenie=0; //воспроизведение стимулов

var tm=0; 

var pull=0;

var V1, V2, V3;
var NTest=5; // test number
var bdate; // seance begin date
var edate; // seance end date

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'beep.wav');



function start() 
 {
 var d;
 d= new Date();
 bdate= Math.floor(d / 1000);
 
 
 
 
 
 if (typeof table !=="undefined"){
 table.parentNode.removeChild(table);
 }
 
 pull=rnd(0,1);
 stimul=-1;
 tm=0;
 gen(); //генерация стимулов
 test(); //начало тестирования
 
 document.getElementById("button1").onclick=function(){quit();};
 document.getElementById("button1").innerHTML="Выход";
 }

function quit() 
 {
 window.location.href="index.php";
 
 }

 
 function rnd(min, max) //генерация случайных чисел
 {
 return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function uniq_rnd(min, max) //генерация случайных неповторяющихся чисел в n[]
 {
 for (var i=min;i<max+1;i++) 
  {
  n[i]=i;
  }
 for (var i=0;i<max-min*10;i++)
  {
  var a=rnd(min, max);
  var b=rnd(min, max);
  var c;
  
  c=n[a];
  n[a]=n[b];
  n[b]=c;
  }
 }

function gen() //генерация чисел, букв, слов
 {
 
 var gt = new Array();

 for (var i=0;i<5;i++) gt[i] = new Array();
 
 uniq_rnd(0,259);
 for (var i=0;i<260;i++)
  {
  gt[2][i]=n[i];
  gt[0][i]=rnd(0,9);
 }

 var dl=3;
 var st=0;
 var pr=0;
 
 for (var i=0;i<8;i++)
  {
  for (var j=0;j<5;j++) 
   {
   uniq_rnd(0,18);
   for (var k=0;k<dl;k++) 
    {
    gt[1][st]=n[k];
	proba[st]=pr;
	dlina[st]=dl;
    st++;
    }
	 pr++;
   }   
  dl++;
  }
  
/*
 for (i in gt[1]) {
    document.write(gt[1][i]);
	document.write(":");
}
*/


 for (var i=0;i<260;i++)
  {
  var ty=rnd(0,4);
  
  if (ty==0) t[i]=ty+":"+gt[0][i];
  if (ty==1) t[i]=ty+":"+gt[1][i];
  if (ty==2) t[i]=ty+":"+gt[2][i];
  if (ty==3) t[i]=ty+":"+gt[2][i];
  if (ty==4) t[i]=ty+":"+gt[2][i];
  }


 }
 
 function tdef(tip) //определяет тип текущего стимула
 /*
0 - цифры
1 - согл. буквы
2 - кон. слова
3 - абс. слова
4 - псе. слова
5 - матрицы
*/
 {
 if (tip==0) type="cifri";
 if (tip==1) { type="bukvi"; massiv=sog_bukvi; }
 if (tip==2) { type="slova"; massiv=con_slova_1s; }
 if (tip==3) { type="slova"; massiv=abs_slova_1s; }
 if (tip==4) { type="slova"; massiv=pse_slova; }
 } 
 
 
 

var table; 
 
function create_control() //создает таблицу
 {

table = document.createElement("table");



// Это количество строк
var rows = 5; 
// Это количество ячеек в строке (количество столбцов)
var cells = dlina[stimul];

// Получить ссылку на body
var body = document.getElementsByTagName("body")[0];

// Создать элемент <table> и элемент <tbody>

table.border=2;
//table.align="center";
var tableBody = document.createElement("tbody");

// Создать все ячейки
for (var j = 0; j < rows; j++) {
    // Создать строкуA\Q\
    var row = document.createElement("tr");

    for (var i = 0; i < cells; i++) {
        // Создать и заполнить элемент <td>
        var cell = document.createElement("td");
		cell.height=50;
		cell.style.color="blue";
		if (type!="slova") 
		 {
		 cell.width=50;
		 //cell.style.fontSize = "17px";
		 }
        /* Здесь нужно будет заполнить своими данными ячейку
        var cellText = document.createTextNode(j*dlina[stimul] + i + ":" + massiv[rnd(0,259)] );

        cell.appendChild(cellText); */
        row.appendChild(cell);
    }

    // Добавить строку в конец элемента tbody
    tableBody.appendChild(row);
}

// Поместить <tbody> внуть <table>
table.appendChild(tableBody);
// Добавить <table> внутрь <body>
body.appendChild(table);





if (stimul+dlina[stimul]*5>260)
 {
 for (var i=0;i<dlina[stimul]*5;i++)
  {
  tdef(t[stimul-i].substr(0,1)); 
  if (type=="cifri") table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].innerHTML=t[stimul-i].substr(2,10);
  else table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].innerHTML=massiv[t[stimul-i].substr(2,10)];
  }
 }

else
 {
 for (var i=0;i<dlina[stimul]*5;i++)
  {
  tdef(t[stimul-dlina[stimul]+1+i].substr(0,1)); 
  if (type=="cifri") table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].innerHTML=t[stimul-dlina[stimul]+1+i].substr(2,10);
  else table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].innerHTML=massiv[t[stimul-dlina[stimul]+1+i].substr(2,10)];
  }
 }



for (var i=0;i<dlina[stimul]*5*10;i++)
 {
var a=rnd(0, (dlina[stimul]*5)-1);
var b=rnd(0, (dlina[stimul]*5)-1);
var c;
 c=table.rows[Math.floor(a/dlina[stimul])].cells[a%dlina[stimul]].innerHTML;
 table.rows[Math.floor(a/dlina[stimul])].cells[a%dlina[stimul]].innerHTML=table.rows[Math.floor(b/dlina[stimul])].cells[b%dlina[stimul]].innerHTML;
 table.rows[Math.floor(b/dlina[stimul])].cells[b%dlina[stimul]].innerHTML=c;
 }


 
 for (var i=0;i<dlina[stimul]*5;i++)
 {
/*  
 var stroka=table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].innerHTML;

 
 
if (type=="cifri") var str=stroka.slice(stroka.indexOf(":")+1); 
 
else
 {
  var str;
  for(j in massiv)
  {
  if(massiv[j]==stroka.slice(stroka.indexOf(":")+1)) 
   {
   str=j;
   }
  }
 } 
 */
 table.rows[Math.floor(i/dlina[stimul])].cells[i%dlina[stimul]].setAttribute('onclick','vospr('+i+'); '); //событие onclick для каждой ячейки
 }

 
 
 }
 
function test() //начало тестирования (использовать только после генерации стимулов)
{



if (stimul<259) //если стимулы (0-259) не подошли к концу
 {
 



 if (tm%2==0) 
  {
  stimul++;
  tdef(t[stimul].substr(0,1));
  deb.innerHTML="Стимул: "+(stimul+1)+"  Проба: "+(proba[stimul]+1);//+"<br>"+"Пр. стимулы: "+pr_stim+" Пр. пробы: "+pr_prob+" Макс. длина: "+max_dlina;
 
  instr.innerHTML="Запомните "+dlina[stimul]+" стимула(ов)";
  
  
  if (type=="cifri") st.innerHTML=t[stimul].substr(2,10); //вывод цифр
  else
   {
   st.innerHTML=massiv[t[stimul].substr(2,10)];  //вывод остальных стимулов
   }
  
  st.style.visibility = "visible";
  }

 if (proba[stimul]==proba[stimul+1])
  {
  if (tm%2==1) 
   {
   st.style.visibility = "hidden";
   }

  tm++;

  setTimeout("test()", MS);

  }
 
 else
  {
  setTimeout(function() 
   {
   audioElement.play();   
   st.style.visibility = "hidden"; 
   vosproizvedenie=1;
   setTimeout(function() 
    { 
    create_control(); 
	instr.innerHTML="Воспроизведите "+dlina[stimul]+" стимула(ов)"; 
	
	}, MS);
   n_vospr=0;
   
   }, MS);
 
  }
 }

else //тестирование завершено, обновить страницу
 { 
 var d;  // end test
 d= new Date();  
 edate= Math.floor(d / 1000);
 save();
 alert("Тестирование завершено!"); location.reload();
 } 
 
}

function save() {  //sssssss
  var pgoto= "saverez.php?user="; var S1;
  V1= pr_stim;
  V2= pr_prob;
  V3= max_dlina;
  S1="Результат: прав. стим.="+V1+"  прав. проб="+V2+" макс. длина="+V3;
  alert(S1);

  pgoto=pgoto + user + "&mids=" + mids + "&NTest="+NTest
    +"&bdate=" + bdate + "&edate=" + edate + "&id_N=" + id_N 
      + "&V1=" + V1 + "&V2=" + V2 + "&V3=" + V3;
  //alert("1 pgoto="+pgoto);
  window.location=pgoto;
  //alert("V1="+V1+" V2="+" V3="+V3);
}

function vospr(cid) //воспроизведение (выполняется при щелчке на ячейку матрицы)
 {
 //table.parentNode.removeChild(table);
 //setTimeout("test()", MS);
 
 
 
 if (vosproizvedenie==1)
  {
  n_vospr++;
  
 table.rows[Math.floor(cid/dlina[stimul])].cells[cid%dlina[stimul]].style.color="red";
  
  vospr_stim[stimul-dlina[stimul]+n_vospr]=table.rows[Math.floor(cid/dlina[stimul])].cells[cid%dlina[stimul]].innerHTML;
  
  if (n_vospr==dlina[stimul])
   {
   
   var pr=0;
   
   for (i=0;i<n_vospr;i++)
    {
	tdef(t[stimul-i].substr(0,1));
	if (t[stimul-i].substr(0,1)==0)
	 {
	 if (vospr_stim[stimul-i]==t[stimul-i].substr(2,10))   
	  {
	  pr++;
	  pr_stim++;
	  }
	 }
	else
	 {
	 tdef(t[stimul-i].substr(0,1));
	 //alert(vospr_stim[stimul-i]+"  :  "+t[stimul-i].substr(0,1)+"  :  "+massiv[t[stimul-i].substr(2,10)])+"  :  "+t[stimul-i];
	 if (vospr_stim[stimul-i]==massiv[t[stimul-i].substr(2,10)])   
	  {
	  pr++;
	  pr_stim++;
	  }
	 }
	}
   if (pr==n_vospr) pr_prob++;
   
   var bp=0;
   if (dlina[stimul+1]>dlina[stimul])
    {
    for (var i=0;i<dlina[stimul]*5;i++)
	 {
	 	tdef(t[stimul-i].substr(0,1));
	if (t[stimul-i].substr(0,1)==0)
	 {
	 if (vospr_stim[stimul-i]==t[stimul-i].substr(2,10))   
	  {
	  bp++;
	  }
	 }
	else
	 {
	 tdef(t[stimul-i].substr(0,1));
	 //alert(vospr_stim[stimul-i]+"  :  "+t[stimul-i].substr(0,1)+"  :  "+massiv[t[stimul-i].substr(2,10)])+"  :  "+t[stimul-i];
	 if (vospr_stim[stimul-i]==massiv[t[stimul-i].substr(2,10)])   
	  {
	  bp++;
	  }
	 }
	 }
	if (bp==dlina[stimul]*5) max_dlina=dlina[stimul];
    }
   audioElement.play();	
   table.parentNode.removeChild(table);
   vosproizvedenie=0;
   setTimeout("test()", MS);
    }	
  //tab.rows[Math.floor(cid/4)].cells[cid%4].innerHTML=n_vospr;
  }

 
 
 //alert(massiv[cid]+" : "+massiv[t[stimul-dlina[stimul]+n_vospr]]); 
 
 }


function calc()
{ var V1,V2,V3;
//alert("V1");
       //V1= VdoVARStimul(); // Вариант 1.
       //V2= VdoVARProba();
       //V3= VdoVAR3();
  V1= pr_stim;
  V2= pr_prob;
  V3= max_dlina;

  alert("V1="+V1+" V2="+V2+" V3="+V3);
}

function dovis(v,id) {
   var S1;
   var  objid= document.getElementById(id);
   if (v==1) { objid.style.display= "block";}
   else {objid.style.display= "none";}
}


function getvalue(id) {
  var S1; var objid= document.getElementById(id);
  S1= objid.value;
  if (!S1) {  S1= objid.firstChild.nodeValue;}
  return S1;
}


function inf(id) {
  if (MS==1000) { MS=3; }
  else {
   if (MS==3) { MS=1000; }
  } 
  alert("MS="+MS);
}


function lChange() { 
  var S1=""; 
  if (vizlook) { vizlook=0; } else { vizlook=1;  }
  S1= getvalue("idlook");
  if(S1=="mlookr") {  
     dovis(vizlook,"idcalc");
     //dovis(vizlook,"idPR");
     dovis(vizlook,"idinf");
  }
}
