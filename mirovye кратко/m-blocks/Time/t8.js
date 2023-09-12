var V1, V2, V3;
var NTest=8; // test number
var bdate;   // seance begin date
var edate;   // seance end date
var vizlook=0;

var addvisible=0;  // ==1->  сделать информ. блоки видимыми:   IDINF  idadd
var NNN=3;
var tt=0;
var bfirst=1;
var donegrs=0;

var T8LenSeries=3;
var T8NProbe=0;  //! probe number
var NinProbe=1;  // 1..5
var NStimul=0;   //V! ==i
var rez=0;      //V!  result
var doneT8GrInf=0; //V! ==1->done doneT8GrInf   ==0->not done
var nsleep=1000;
var IntervalTimer=9000;
var Wrun;
var WBeetw;
var WOtvet;

var T8GrInf= new Array(41);
var RowCount=1; // row numbers in table T8GrInf


function setvalue(id,val) {
  var objid= document.getElementById(id);
  objid.value= val;
}

function setPnxy() {
  var id;
  id= "Pn"+x;  id= id+y; 
  setvalue(id,"X"); //Pa[x][y]->Caption= "X";
}

function setChildvalue(id,val) {
  var objid= document.getElementById(id);
  objid.firstChild.nodeValue= val;
}

function getvalueB(id) {
  var S1; var objid= document.getElementById(id);
  S1= objid.value;
  return S1;
}

function getvalue(id) {
  var S1; var objid= document.getElementById(id);
  S1= objid.value;
  if (!S1) {  S1= objid.firstChild.nodeValue;}
  return S1;
}


function dovis(v,id) {
   var S1;
   var  objid= document.getElementById(id);
   if (v==1) { objid.style.display= "block";}
   else {objid.style.display= "none";}
}

function visPROBASTIMUL(v,L) {   //uuuuuuuu
   var S1;
   var objNPR= document.getElementById("NPR");
//alert(" T6NProbe="+T6NProbe+" NinProbe="+NinProbe);
   if (v==1) {
      S1= "Проба № " + T8NProbe; 
      if (L<=T8LenSeries) S1+= "  Стимул № " + L; // + " len="+T8LenSeries;
      objNPR.firstChild.nodeValue = S1;
      objNPR.style.display=    "block"; 
   }
   else {objNPR.style.display= "none";
   }
}



function doT8GrInf() {  //ggggg
  var i,j;
  if (doneT8GrInf) return ;
  for(i=0;i<T8GrInf.length;i++){
    T8GrInf[i] = new Array(7);
    for (j=0;j<T8GrInf[i].length; j++){
       T8GrInf[i][j] = "";
    }
  }
  doneT8GrInf=1;
}


function clearT8GrInf() {  //ggggg
  var i,j;
  for(i=1;i<T8GrInf.length;i++){
    for (j=0;j<T8GrInf[i].length; j++){
      T8GrInf[i][j] = "";
    }
  }
}



function mmm(v) { 
  window.clearInterval(WBeetw);
  dovis(0,"T8ZLabel");
  //setvalue("idlook","mmm");
  Wrun = setInterval("doStimul(0)", nsleep);
}

function doOtv(v) {  
   // otvet  
   setvalue("OtvEdit","");
   window.clearInterval(WOtvet);
   dovis(0,"T8ZLabel");
   dovis(1,"operTable");
   //setvalue("idlook","doOtv");
}

function doStimul(v) { 
   var Lchar, znak, S1,S2,S3;

   window.clearInterval(Wrun);
   NStimul++;
   visPROBASTIMUL(1,NStimul);
   if (NStimul>T8LenSeries) {
     //setvalue("idlook","1doStimul="+NStimul);
     WOtvet = setInterval("doOtv(0)", nsleep);    
     return ;
   }
   znak=Math.floor(Math.random()*2)
   Lchar=Math.floor(Math.random()*10);
   S3= Lchar;
   if (znak) { S2="-"; rez-= S3;  }
   else { S2="+"; rez+= S3;  }
   T8GrInf[T8NProbe][5]=rez;

   S1= T8GrInf[T8NProbe][4];
   T8GrInf[T8NProbe][4]= S1 + S2 + Lchar;

   setChildvalue("T8ZLabel","Выполнить:  "+ S2 + Lchar); 
   dovis(1,"T8ZLabel");  
   //setvalue("idlook","2doStimul r1="+rez); 
   WBeetw = setInterval("mmm(0)", nsleep);    
}



function doPR()   
{   var i, znak, w;   // Number in Probe: 1..5
    var Lchar;   var S1, S2, S3, S0;

   T8NProbe++; NinProbe++;

   if (NinProbe>5) { NinProbe=1; T8LenSeries++; }
   if (T8NProbe>40) return ;
   T8GrInf[T8NProbe][0]=T8NProbe;
   T8GrInf[T8NProbe][1]=NStimul; //w;
   T8GrInf[T8NProbe][2]=NinProbe;
   T8GrInf[T8NProbe][3]=T8LenSeries;

   NStimul=0;   //V! ==i
   // DO Digit
   dovis(0,"operTable");
   Lchar=Math.floor(Math.random()*10);
   S1=Lchar;
   T8GrInf[T8NProbe][4]=S1;

   S2= "Запомните цифру:  "+  Lchar; 
   setChildvalue("T8ZLabel",S2); 
   dovis(1,"T8ZLabel");  
   rez= Lchar; 
   T8GrInf[T8NProbe][5]=rez;
   //setvalue("idlook","doPR rez="+rez);
   Wrun = setInterval("doStimul(0)", nsleep);    //nsleep            
}


function  init() {

  //addvisible=1;  // ==1-  сделать информ. блоки видимыми   IDINF  idadd
  if(addvisible) {  dovis(1,"idadd");  }

  T8LenSeries=3;
  T8NProbe=0;  //! probe number
  NinProbe=0;  // 1..5
  NStimul=0;   //V! ==i
  doT8GrInf();

    T8GrInf[0][0]="№ пр";
    T8GrInf[0][1]="№ бл";

    T8GrInf[0][2]="№ в бл";
    T8GrInf[0][3]="len";
    T8GrInf[0][4]="digits";
    T8GrInf[0][5]="rez";
    T8GrInf[0][6]="otv";

  clearT8GrInf();
}


function T8ButtonClick()
{  var d;
      d= new Date();
      bdate= Math.floor(d / 1000);

      dovis(1,"NPanel");  //LLLLLL
      init();   //iiiiii   
      dovis(0,"idB");  //start
      //alert("qq2");
      doPR();
}


function otv() { //oooooooo
    var S1; var d;

    visPROBASTIMUL(0,0);
    S1= getvalueB("OtvEdit");
    T8GrInf[T8NProbe][6]=S1;
    doPR();
    if (T8NProbe>40) {  // kkkkk
        //alert("===T8NProbe="+T8NProbe);
        dovis(0,"NPanel");
        //T8Init();
        dovis(1,"idB");
        //dovis(1,"NPR");

        d= new Date();
        edate= Math.floor(d / 1000);

        save();
    }
}



function lChange() {  
  var vz;
  objlook= document.getElementById("idlook");
  flook= objlook.value;
  if (vizlook) { vizlook=0; vz="none"; } else { vizlook=1; vz="block"; }
  if(flook=="mlookr") {
    objcalc= document.getElementById("idcalc");
    objcalc.style.display= vz;

    objPR= document.getElementById("idPR");
    objPR.style.display=   vz;

    objPR= document.getElementById("idadd");
    objPR.style.display=   vz;
   }
}


function prqq() {
  var s=''; 
  for(var i=0;i<T8GrInf.length;i++){
    if (T8GrInf[i][0]=="") { 
       //alert("-3- i="+i); 
       break; 
    }
    for (var j=0;j<T8GrInf[i].length;j++){
      s=s + " " + T8GrInf[i][j] ;    
    }
    s=s + '\n' ;
  }
  alert("s="+s);
}



function doVAR1()  //lllll
{ var i, HowTrueProb=0; var S1, S2;
  for (i=1; i<=40; i++) {

    if (T8GrInf[i][0]==""){ break; }
    S1= T8GrInf[i][5];
    if (S1.length==0 && S1=="") {
        break;
    }
    S2= T8GrInf[i][6];

    if ( (S1==S2 && S2.length>0) || (S1==0 && S2=="0") )HowTrueProb++;
  }
  return HowTrueProb;
}

function doVAR2()
{ var i, j, HowTrueProb=0, k, lenVAR2=0; var S1, S2;
  for (i=1; i<=40; i+=5) {
    if (T8GrInf[i][0]=="") break;
    k=0;
    for (j=i; j<i+5; j++) {
      S1= T8GrInf[j][5];
      if (S1=="") break;
      S2= T8GrInf[j][6];
      if (S2=="") break;
      if (S1==S2)k++;
    }
    if(k==5) lenVAR2=T8GrInf[i][3];
  }
  return lenVAR2;
}


function calc()
{ 
       V1= doVAR1(); 
       V2= doVAR2();
       alert("V1="+V1+" V2="+V2);
}

function inf(id)
{ 
  if (nsleep==1000) { nsleep=3; }
  else {
   if (nsleep==3) { nsleep=1000; }
  } 
}

function inf2() {
  var N,S1,S2,L1,L2;
  N=  getvalueB("OtvEdit");
  S1= T8GrInf[N][5];
  S2= T8GrInf[N][6];
  L1= S1.length;
  L2= S2.length;
  alert("N="+N+" S1="+S1+" S2="+S2+" L1="+L1+" L2="+L2);
}

function save() {  //sssssss
  var pgoto= "saverez.php?user="; var S1;
  //alert("save()");

  V1= doVAR1(); 
  V2= doVAR2();
  V3= 0;
  S1="Результат: прав. стим.="+V1+"  прав. проб="+V2;
  alert(S1);

  pgoto=pgoto + user + "&mids=" + mids + "&NTest="+NTest+"&bdate="
      + bdate + "&edate=" + edate + "&id_N=" + id_N 
      + "&V1=" + V1 + "&V2=" + V2 + "&V3=" + V3;
  //alert("1 pgoto="+pgoto);
  window.location=pgoto;
  //alert("V1="+V1+" V2="+" V3="+V3);
}



