var bdate;   // seance begin date
var edate;   // seance end date
var NTest=7;
var V1,V2,V3;
var VVS1Pr=0;
var VVS1=" ";

var vvvvv=0;
var endx=0; var endy=0;
var nreply=0;
var rez=0; 

var addvisible=0;  // ==1->  сделать информ. блоки видимыми:   IDINF  idadd
var T7LenSeries=3;
var T7NProbe=0;  
var NinProbe=1;  // 1..5
var NStimul=0;   
var RowCount=1; // row numbers in table T7GrInf
var doneT7GrInf=0; //V! ==1->done doneT8GrInf   ==0->not done
var bsetval=0;
var vfig,ffig;

var nsleep=2000;  // 10 1000
var IntervalTimer=9000;
var Wrun;
var WBeetw;
var WOtvet;

  var winwidth=0;
  var ctx;
  // массивы
  var T7GrInf= new Array(41); // 5проб * 8серий = 40
  var mfig = new Array(11);  //для 10 номеров фирур выбранных случайно из 20
  var mfon = new Array(11);  //для 10 номеров фона выбранных случайно из 20
  var mrandplace = new Array(11); //для 10 случайных номеров расположения в таблице
  var motvfig = new Array(21);    //для 20 номеров фирур в таблице
  var motvfon = new Array(21);    //для 20 номеров фона в таблице

  var xtable=100, ytable=100, wtable=0, dtable=20;
  var wctable=100;  // ширина клетки таблицы

function cl() {
  //alert("==cl==");
}

function setvalue(id,val) {  
  var objid= document.getElementById(id);
  objid.value= val;
}


function getvalue(id) {
  var S1; var objid= document.getElementById(id);
  S1= objid.value;
  if (!S1) {  S1= objid.firstChild.nodeValue;}
  return S1;
}


function setChildvalue(id,val) {
  var objid= document.getElementById(id);
  objid.firstChild.nodeValue= val;
}

function dovis(v,id) {
   var S1;
   var  objid= document.getElementById(id);
   if (v==1) { objid.style.display= "block";}
   else {objid.style.display= "none";}
}


function inf(id)
{ 
  if (nsleep==1000) { nsleep=3; }
  else {
   if (nsleep==3) { nsleep=1000; }
  } 
}


    function dofon(f){ // 33333
        switch (f) {
         case 0: {ctx.fillStyle="rgba(255,255,255,.6)"; break;}
         case 1: {ctx.fillStyle="rgba(200,200,100,.6)"; break;}
         case 2: {ctx.fillStyle="rgba(250,0,0,.6)"; break;}
         case 3: {ctx.fillStyle="rgba(0,250,0,.6)"; break;}
         case 4: {ctx.fillStyle="rgba(0,0,250,.6)"; break;}

         case 5: {ctx.fillStyle="rgba(0,255,255,.6)"; break;}   //aqua #00ffff
         case 6: {ctx.fillStyle="rgba(128,128,128,.6)"; break;} //gray #808080
         case 7: {ctx.fillStyle="rgba(0,0,128,.6)"; break;}     //navy
         case 8: {ctx.fillStyle="rgba(192,192,192,.6)"; break;} //silve #c0c0c0
         case 9: {ctx.fillStyle="rgba(0,128,0,.6)"; break;}     //green
         case 10: {ctx.fillStyle="rgba(128,128,0,.6)"; break;}  //olive
         case 11: {ctx.fillStyle="rgba(0,128,128,.6)"; break;}  //teal сине-зелёный
         case 12: {ctx.fillStyle="rgba(128,0,128,.6)"; break;}  //purple сине-зелёный
         case 13: {ctx.fillStyle="rgba(255,255,255,.6)"; break;} //white
         case 14: {ctx.fillStyle="rgba(255,0,255,.6)"; break;}  //fuchsia
         case 15: {ctx.fillStyle="rgba(128,0,0,.6)"; break;}    //maroon
         case 16: {ctx.fillStyle="rgba(255,255,0,.6)"; break;}  //yellow
         case 17: {ctx.fillStyle="rgb(100,200,200)"; break;} 
         case 18: {ctx.fillStyle="rgb(100,200,0)"; break;} 
         case 19: {ctx.fillStyle="rgb(100,0,200)"; break;} 
         case 20: {ctx.fillStyle="rgb(50,120,100)"; break;} 
         default: { } 
        }
    }  // 

    //************  fcase ***************
    function fcase(v,x,y,w) { // ccccccccc

        switch (v) {
         case 0: {  break; }
         case 1: { 
                     //ctx.strokeRect(x,y,w,w); 
                     //-ctx.fillStyle = "rgba(200, 200, 100, .6)";
                     ctx.beginPath();
                     ctx.moveTo(x,y);
                     ctx.lineTo(x+w,y);
                     ctx.lineTo(x+w,y+w);
                     ctx.lineTo(x,y+w);
                     ctx.moveTo(x,y);
                     ctx.closePath();
                     ctx.fill(); //*****
                     ctx.stroke();
                     break; 
                     }
         case 2: { // Залитый треугольник
                     ctx.beginPath();
                     ctx.moveTo(x,y);
                     ctx.lineTo(x,y+w);
                     //alert("fig 2 x="+x+" y+w="+(y+w));
                     ctx.lineTo(x+w,y+w);
                     ctx.lineTo(x,y);
                     ctx.closePath();
                     ctx.fill(); //*****
                     ctx.stroke();
                     break; 
                   }
         case 3: { 
                     ctx.beginPath();
                     ctx.moveTo(x+w,y);
                     ctx.lineTo(x+w,y+w);
                     ctx.lineTo(x,y+w);
                     ctx.lineTo(x+w,y);
                     ctx.closePath();
                     ctx.fill(); //*****
                     ctx.stroke();
                     break; 
                   }
         case 4: { 
                     ctx.beginPath();
                     ctx.moveTo(x,y);
                     ctx.lineTo(x+w/2,y+w/2);
                     ctx.lineTo(x+w,y);
                     ctx.lineTo(x+w,y+w);
                     ctx.lineTo(x,y+w);
                     ctx.lineTo(x,y);
                     ctx.closePath();
                     ctx.fill(); //*****
                     ctx.stroke();
                     break; 
                   }
         case 5: { 
                     ctx.beginPath();
                     // Внешний круг
              ctx.arc(x+w/2,y+w/2,w/2,0,Math.PI*2,true); 
                     ctx.closePath();
                     ctx.stroke();
                     break; 
                   }
         case 6: { // zvezda
                   var ugol1= Math.PI/2 - (2*Math.PI/5); 
                   var ugol2= Math.PI/2 - (4*Math.PI/5); 
                   var axzvezda= new Array(5);
                   var ayzvezda= new Array(5);

                   axzvezda[0]=0; 
                   axzvezda[1]=Math.cos(ugol1); 
                   axzvezda[2]= Math.cos(ugol2); 
                   axzvezda[3]= -axzvezda[2];
                   axzvezda[4]= -axzvezda[1]; 
                   ayzvezda[0]=1; 
                   ayzvezda[1]=Math.sin(ugol1);
                   ayzvezda[2]= Math.sin(ugol2); 
                   ayzvezda[3]= ayzvezda[2];
                   ayzvezda[4]= ayzvezda[1]; 

                    ctx.beginPath();
                    ctx.moveTo(x+w/2,y); 
                    ctx.lineTo(x+w/2 + axzvezda[2]*(w/2) 
                              ,y+w/2 - ayzvezda[2]*(w/2));
                    ctx.lineTo(x+w/2 + axzvezda[4]*(w/2) 
                              ,y+w/2 - ayzvezda[4]*(w/2));
                    ctx.lineTo(x+w/2 + axzvezda[1]*(w/2) 
                              ,y+w/2 - ayzvezda[1]*(w/2));
                    ctx.lineTo(x+w/2 + axzvezda[3]*(w/2) 
                              ,y+w/2 - ayzvezda[3]*(w/2));
                    ctx.lineTo(x+w/2,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                 }
         case 7: {  // ромб
                    ctx.beginPath();
                    ctx.moveTo(x+w/2,y);  
                    ctx.lineTo(x+w/2 + w/4 ,y+w/2);
                    ctx.lineTo(x+w/2 , y+w);
                    ctx.lineTo(x+w/4 , y+w/2);
                    ctx.lineTo(x+w/2 , y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 8: {  // трапеция
                    ctx.beginPath();
                    ctx.moveTo(x+w/4,y);  
                    ctx.lineTo(x+w/2+w/4,y);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x+w/4,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 9: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x+w/3,y+2*w/3);
                    ctx.lineTo(x,y+w/2);
                    ctx.lineTo(x+w/3,y+w/3);
                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 10: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x+w/2,y+w/4);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 11: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+3*w/4,y+w/8);
                    ctx.lineTo(x+w,y+w/8);
                    ctx.lineTo(x+3*w/4,y+w/4);
                    ctx.lineTo(x+w,y+w/4);
                    ctx.lineTo(x+3*w/4,y+3*w/8);
                    ctx.lineTo(x+w,y+3*w/8);
                    ctx.lineTo(x+3*w/4,y+w/2);
                    ctx.lineTo(x+w,y+w/2);

                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 12: {  // 
                    ctx.beginPath();
                    ctx.arc(x+w/2,y+w/2,w/2,0,Math.PI,true);
                    ctx.lineTo(x+w/2,y+w);
                    ctx.lineTo(x+w,y+w/2);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 13: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 14: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w/4,y);
                    ctx.lineTo(x+w/4,y+w/4);
                    ctx.lineTo(x+3*w/4,y+w/4);
                    ctx.lineTo(x+3*w/4,y);
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x+3*w/4,y+w);
                    ctx.lineTo(x+3*w/4,y+3*w/4);
                    ctx.lineTo(x+w/4,y+3*w/4);
                    ctx.lineTo(x+w/4,y+w);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 15: {  // 
                    ctx.beginPath();
                    ctx.arc(x+w/4,y+w/4,w/4,0,Math.PI,1);
                    ctx.arc(x+3*w/4,y+w/4,w/4,0,Math.PI,true);
                    ctx.moveTo(x+w,y+w/4);

                    ctx.lineTo(x+w/2,y+w);
                    ctx.lineTo(x,y+w/4);

                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 16: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w,y);
                    ctx.lineTo(x+w,y+w/4);
                    ctx.lineTo(x+w/2,y+w/2);
                    ctx.lineTo(x+w/4,y+w);
                    ctx.lineTo(x,y+w);

                    ctx.lineTo(x,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 17: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x+w/2,y);  
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x+w/2,y+w/2);
                    ctx.lineTo(x+w,y+w);
                    ctx.lineTo(x+w/2,y);
                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 18: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x+w/2,y);  
                    ctx.lineTo(x,y+w/2);
                    ctx.lineTo(x+w/4,y+w/2);
                    ctx.lineTo(x+w/4,y+w);
                    ctx.lineTo(x+3*w/4,y+w);
                    ctx.lineTo(x+3*w/4,y+w/2);
                    ctx.lineTo(x+w,y+w/2);
                    ctx.lineTo(x+w/2,y);

                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 19: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x+w/2,y);  
                    ctx.lineTo(x,y+w/2);
                    ctx.lineTo(x+w/2,y+w);
                    ctx.lineTo(x+w,y+w/2);
                    ctx.lineTo(x+w/2,y);

                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         case 20: {  // 
                    ctx.beginPath();
                    ctx.moveTo(x,y);  
                    ctx.lineTo(x+w,y+w/4);
                    ctx.lineTo(x,y+w);
                    ctx.lineTo(x,y);

                    ctx.closePath();
                    ctx.stroke();
                    break; 
                   }
         default: { } 
        }

        ctx.fill(); 
    }  // fcase


    function dofig(){   
      var S1,S2;
      var x= 100; //parseFloat(getvalue("idx")); 
      var y= 100; //parseFloat(getvalue("idy")); 
      var w= 200; //parseFloat(getvalue("idw")); 
      var v= 1;   //parseFloat(getvalue("idv")); 
      var f= 1;   //parseFloat(getvalue("idf")); 
      winwidth=window.document.width;

      if (window.document.width==undefined) winwidth=700;
      //alert(" winwidth="+winwidth);
      x= (winwidth - w )/2;
      var canvas = document.getElementById("canvas");

      if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 80, winwidth, 500); //ccccccc

        vfig=Math.floor(Math.random()*20) + 1;  // вид фигуры
        mfig[NStimul] = vfig;
        ffig=Math.floor(Math.random()*20) + 1;  // фон фигуры
        mfon[NStimul] = ffig;

        setvalue("idv",v);
        setvalue("idf",f);

        dofon(ffig);
        fcase(vfig,x,y,w);
  
      } 
    }

  
function doT7GrInf() {  
  var i,j;
  if (doneT7GrInf) return ;
  for(i=0;i<T7GrInf.length;i++){
    T7GrInf[i] = new Array(9);
    for (j=0;j<T7GrInf[i].length; j++){
       T7GrInf[i][j] = "0";
    }
  }
  doneT7GrInf=1;
}


function clearT7GrInf() {  
  var i,j;
  for(i=1;i<T7GrInf.length;i++){
    for (j=0;j<T7GrInf[i].length; j++){
      T7GrInf[i][j] = "";
    }
  }
}



function prqq() { 
  var s='';  var HowTrueProb; var HowTrueStimul; var HowVAR3;
  for(var i=0;i<T7GrInf.length;i++){
    if (T7GrInf[i][0]=="") { 
       //alert("-3- i="+i); 
       break; 
    }
    for (var j=0;j<T7GrInf[i].length;j++){
      s=s + " " + j+":"+ T7GrInf[i][j] ;    
    }
    s=s + '\n' ;
  }

  s=s+'\n' + "mfig: ";
  for(var i=1;i<=T7LenSeries;i++){
    s=s+" "+i+":"+mfig[i];
  }

  s=s+'\n' + "mfon: ";
  for(var i=1;i<=T7LenSeries;i++){
    s=s+" "+i+":"+mfon[i];
  } 

  s=s+'\n' + "mrandplace: ";
  for(var i=1;i<=T7LenSeries;i++){
    s=s+" "+i+":"+mrandplace[i];
  }

  HowTrueStimul= doVAR1();
  HowTrueProb=   doVAR2();
  HowVAR3= VdoVAR3();
  s=s+'\n' + "HowTrueStimul: "+HowTrueStimul + " HowTrueProb: "+HowTrueProb + " HowVAR3="+HowVAR3+ " zvuk="+zvuk;

  alert("s="+s);  
}


function  init() {
  T7LenSeries=3;
  T7NProbe=0;  //! probe number
  NinProbe=0;  // 1..5
  NStimul=0;   //V! ==i
  doT7GrInf();
    T7GrInf[0][0]="№пр";
    T7GrInf[0][1]="№бл";

    T7GrInf[0][2]="№вбл";
    T7GrInf[0][3]="len";
    T7GrInf[0][4]="vfig";
    T7GrInf[0][5]="ffig";
    T7GrInf[0][6]="vo";
    T7GrInf[0][7]="fo";
    T7GrInf[0][8]="рез";
  clearT7GrInf();
}


function getCursorPosition(e) {  // ,w   here!!!!!  rrrrr  ggggg
  var wnx,wny,nx,ny,nn;
  var S1="", w="";
  var vfig, ffon;

  wnx= (e.pageX - xtable)/(wctable+dtable);
  wny= (e.pageY - ytable)/(wctable+dtable);

  nx=Math.floor(wnx);
  ny=Math.floor(wny);
  nn= nx + ny*5 +1; // № ячейки таблицы
//alert("nn="+nn);  // № ячейки

  if (e.pageX<=xtable) { // ggggg
     //alert("< left table e.pageX="+e.pageX+" xtable="+xtable); 
     return; }
  if (e.pageY<=ytable) { 
     //alert("< top table"); 
     return; }
  if (e.pageX>=endx)   { 
     //alert("> right table e.pageX="+e.pageX+" xtable="+xtable); 
     return; }
  if (e.pageY>=endy)   { 
     //alert("> bottom table"); 
     return; }

  //alert("1@");
  nreply++;
  visPROBASTIMUL(2,0);
  vfig=motvfig[nn]; // № фигуры
  ffon=motvfon[nn]; // № фона

  if (parseInt(vfig)<10) w="0" + vfig; else w= vfig;   // ,w   here!!!!!    rrrrr
  S1=T7GrInf[T7NProbe][6]; S1= S1+w; T7GrInf[T7NProbe][6]= S1;

  if (parseInt(ffon)<10) w="0" + ffon; else w= ffon;   // ,w   here!!!!!    rrrrr
  S1=T7GrInf[T7NProbe][7]; S1= S1+w; T7GrInf[T7NProbe][7]= S1;

  if (nreply>= T7LenSeries) {
     //--alert(" ^^^^^^^^^^ nreply="+nreply); 
     doPR();
  }

} // nn



function doButPropusk() { // Кнопка ПРОПУСК
  var S1="";

  nreply++; 
  visPROBASTIMUL(2,0);
  S1=T7GrInf[T7NProbe][6]; S1= S1+"PP"; T7GrInf[T7NProbe][6]= S1;
  S1=T7GrInf[T7NProbe][7]; S1= S1+"PP"; T7GrInf[T7NProbe][7]= S1;

  //prqq();

  if (nreply>= T7LenSeries) {
     //alert(" ^^^^^^^^^^ nreply="+nreply); 
     doPR();
  }
}

function halmaOnClick(e) { 
    var cell = getCursorPosition(e);
    for (var i = 0; i < gNumPieces; i++) {
	if ((gPieces[i].row == cell.row) && 
	    (gPieces[i].column == cell.column)) {
	    clickOnPiece(i);
	    return;
	}
    }
    clickOnEmptyCell(cell);
}


    function dopropusk(xtable,ytable,wtable) { // ccccccccc
       var x=xtable+wtable+dtable, y=ytable,  w=100;

       ctx.beginPath();
       ctx.moveTo(x,y);
       ctx.lineTo(x+w,y);
       ctx.lineTo(x+w,y+w);
       ctx.lineTo(x,y+w);
       ctx.moveTo(x,y);

       ctx.closePath();
       ctx.fill(); //*****
       ctx.stroke();
    }

    function dopropusk2(xtable,ytable,wtable) { // ccccccccc
      //var x=xtable+wtable+dtable, y=ytable,  w=100; // zzzzzzzzz
      var obj= document.getElementById("iddivpr");
      var objz= document.getElementById("idzag");
      obj.style.left=   50 + endx   + "px";
      obj.style.top=    "" + ytable + "px";
      dovis(1,"iddivpr");
      objz.style.left=  "" + xtable  + "px";
      objz.style.top=   "" + ytable  - 50 + "px";
      dovis(1,"idzag");
    }


    function PlaySound(soundObj) {
      var sound = document.getElementById(soundObj);
      if (sound)sound.Play();
    }

    var gCanvasElement;
    function dotb(randtb){  // ttttt  here  ddddddd
      var nstim=0;
      var x,y,w;
      var i,j,k,flag, wx=0,wy=0, v=0, nris=0, d=0, S1="";
      var canvas = document.getElementById("canvas"); 
//alert("=dotb= zvuk="+zvuk);
      if (zvuk) PlaySound('beep');

      nreply=0;
      domrandplace(T7LenSeries);  //00000

      dtable=20;  // расстояние мемду клетками таблицы
      wctable=50; // 100;    // ширина клетки таблицы
      wtable= (wctable+dtable)*5; // ширина таблицы
      xtable= (winwidth - wtable) / 2;   // отступ таблицы по оси x   xxxxxxxxxxx
      ytable= 150; //50;   // отступ таблицы по оси y
      S1= "Отметьте запомненные фигуры";

      x=xtable; y=ytable; d=dtable;
      gCanvasElement= canvas;
      gCanvasElement.addEventListener("click", halmaOnClick, false);  //111
      if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        w=500;
        //ctx.clearRect(x-5, y-5, x+w, y+w);
        ctx.clearRect(0, 80, winwidth, 500);
        w=wctable; 
        for (i=0; i<4; i++)
          for (j=0; j<5; j++) {
             var f= parseInt(Math.random()*20 + 1);
             wx= x+w*j+ d*j; wy= y+w*i + d*i;
             ctx.clearRect(wx-5, wy-5, wx+w, wy+w);

             ctx.beginPath();
             dofon(0);
             ctx.moveTo(wx,wy);
             ctx.closePath();
             ctx.fill(); //*****
             ctx.stroke();

             ctx.beginPath();
             nris++; 
             v=nris; // number fig = order number 

             if (randtb==1) {  // random all fig numbers 
                 v=parseInt(Math.random()*20 + 1);
             } 

             if (randtb==2 || randtb==1) {  // + insert generated fig numbers  
                 for (k=1; k<=T7LenSeries; k++) {
                  if (nris==mrandplace[k]) {
                     v=mfig[k];
                     f=mfon[k];
                  }
                 }
             } 
             dofon(f);
             fcase(v,wx,wy,w);

             motvfig[nris]=v;   motvfon[nris]=f; 

          } //000000
        if (i==4 && j==5) {
          endx= wx + w + d;  endy= wy + w + d /2;
        }
        dopropusk2(xtable,ytable,wtable);
//alert("=dotb= 5");

      }  // if endx=531.5 endy=430 wx=461.5 wy=360 d=20 w=50 

    }   // dotb     



function mmm(v) { 
  window.clearInterval(WBeetw);
  Wrun = setInterval("doStimul(0)", nsleep);
}

function doOtv(v) {  //ooooooo
   //alert("doOtv");
   window.clearInterval(WOtvet);  
   //dotb(0);  //ttttttt
   dotb(1);  // 1-> random tb + insert
   //dotb(2);  //   + insert
}


function visPROBASTIMUL(v,L) {   //ppppp
   var S1;
   var objNPR= document.getElementById("NPR");
   if (v==1 || v==2) {
      S1= "Проба № " + T7NProbe; 
      if (v==1 && L<=T7LenSeries) S1+= "  Стимул № " + L; // + " len="+T8LenSeries;
      if (v==2 && L<=T7LenSeries) S1+= "  (отмечено: " + nreply + " всего: " + T7LenSeries + ")"; 
      objNPR.firstChild.nodeValue = S1;
      objNPR.style.display=    "block"; 
   }
   else {objNPR.style.display= "none";
   }
}


function doStimul(v) { 
   var Lchar, w, znak, S1,S2,S3;
   window.clearInterval(Wrun);  
   NStimul++;

   visPROBASTIMUL(1,NStimul);
   if (NStimul>T7LenSeries) {  //xxxxxx
     //doOtv(0);
     //WOtvet = setInterval("doOtv(0)", nsleep);       //9999999999999
     WOtvet = setInterval("doOtv(0)", 3);       //9999999999999
     return ;
   }

   dofig();   //  NStimul

   if (parseInt(vfig)<10) w="0" + vfig; else w= vfig;
   S1=T7GrInf[T7NProbe][4]; S1= S1+w; T7GrInf[T7NProbe][4]= S1;
   if (parseInt(ffig)<10) w="0" + ffig; else w= ffig;
   S2=T7GrInf[T7NProbe][5]; S2= S2+w; T7GrInf[T7NProbe][5]= S2;

   Wrun = setInterval("doStimul(0)", nsleep);    //nsleep    
}  // v


function doPR()  
{   var i, znak, w;   // Number in Probe: 1..5
    var Lchar;   var S1, S2, S3, S0; 

   window.clearInterval(Wrun); window.clearInterval(WOtvet); window.clearInterval(WBeetw);

   dovis(0,"idzag");  
   dovis(0,"iddivpr");

   T7NProbe++; NinProbe++; NStimul=1;

   if (NinProbe>5) { NinProbe=1; T7LenSeries++; }
   if (T7NProbe>40) {
       ctx.clearRect(0, 80, winwidth, 500); //ccccccc  
       alert(" *** END *** "); //EEEEEE
       //prqq();
       PRREZ();
       return ;
   }
   T7GrInf[T7NProbe][0]=T7NProbe;
   T7GrInf[T7NProbe][1]=NStimul; //w;
   T7GrInf[T7NProbe][2]=NinProbe;
   T7GrInf[T7NProbe][3]=T7LenSeries;

   bsetval=1;
   dofig();
   if (parseInt(vfig)<10) w="0" + vfig; else w= vfig;
   S1=T7GrInf[T7NProbe][4]; S1= S1+w; T7GrInf[T7NProbe][4]= S1;

   if (parseInt(ffig)<10) w="0" + ffig; else w= ffig;
   S2=T7GrInf[T7NProbe][5]; S2= S2+w; T7GrInf[T7NProbe][5]= S2;

   visPROBASTIMUL(1,NStimul);

   Wrun = setInterval("doStimul(0)", nsleep);    //nsleep  
      
}  // NStimul   S0


function domrandplace(how)  //uuuuuu
{ var i,j,flag,flag2,w,s;

  for (i=1; i<=how; i++) {
    flag=1;

    while (flag) {
      w= Math.floor(Math.random()*20) + 1;  // вид фигуры
      flag2=0;
      for (j=1; j<i; j++) {
        if (mrandplace[j]==w) flag2=1;
      }
      if (!flag2) {
         mrandplace[i]=w;
         flag=0;
      }

    }    
  }
  s="";
  for (i=1; i<=how; i++) s=s+" "+i+":"+mrandplace[i];
}


function save() {  //sssssss
  var d;
  var pgoto= "saverez.php?user="; 
  V1=doVAR1();
  V2=doVAR2();
  V3=VdoVAR3();

  d= new Date();
  edate= Math.floor(d / 1000);
  VVS1Pr=1;

  VVS1="!Результат: правильн. стимулов="+V1+" правильн. проб="+V2+" макс.длина успешно реш.блока="+V3;
  alert(VVS1); 
  //prqq();
  clearT7GrInf();

  pgoto=pgoto + user + "&mids=" + mids + "&NTest="+NTest+"&bdate="
      + bdate + "&edate=" + edate + "&id_N=" + id_N 
      + "&V1=" + V1 + "&V2=" + V2 + "&V3=" + V3;
  //alert("1 save pgoto="+pgoto);
  window.location=pgoto;
}  // pgoto

function PRREZ()
{   //var d;
    var objNPR= document.getElementById("NPR");
    objNPR.firstChild.nodeValue = "";

    setvalue("idB","Start");
    ctx.clearRect(0, 80, winwidth, 500); //ccccccc
    dovis(0,"idzag");
    dovis(0,"iddivpr");

    // T7NProbe>40)  // kkkkk

    save(); //!!! later
    return "";
}  // objNPR  edate


function T7ButtonClick() //ssssss
{ var S1;   var d; 
  d= new Date();
  bdate= Math.floor(d / 1000);

  winwidth=window.document.width;
  if (window.document.width==undefined) winwidth=700;
  S1=getvalue("idB");
  if (S1=="Start") setvalue("idB","Прервать");
  else {
    PRREZ();
    return "";
  }

  //dovis(1,"NPanel");  
  //alert("ggg");
  init();    
  //dovis(0,"idB");  
  doPR();
} 


/*
Обработка результатов
Вариант 1. Один балл за каждую правильно воспроизведенный стимул в правильном порядке (0 - 260).
Вариант 2. Один балл за каждую правильно выполненную пробу (0 - 40).
Вариант 3. Итоговый балл равен максимальной длине списка задач в пробе, при которой исп-й успешно решает целый блок проб (3 - 10).
*/

function doVAR1()  //   11111
{ var i, j, HowTrueStimul=0, AllHowTrueStimul=0; var S1, S2, S3, S4, len; 
  for (i=1; i<=40; i++) {
    len= T7GrInf[i][3];  
    HowTrueStimul=0;  
    if (T7GrInf[i][0]==""){ break; }
    S1=T7GrInf[i][4]; S2=T7GrInf[i][6];
    if (S1.length==0 && S1=="" || S2=="") { break; }
    S3= T7GrInf[i][5]; S4= T7GrInf[i][7];
    if (S3.length==0 && S3=="" || S4=="") { break; }

    for (j=1; j<=len; j++) {
      if (S1[(j-1)*2]==S2[(j-1)*2] && S1[j*2-1]==S2[j*2-1]) HowTrueStimul++;
      if (S3[(j-1)*2]==S4[(j-1)*2] && S3[j*2-1]==S4[j*2-1]) HowTrueStimul++;
    }
    T7GrInf[i][8]=HowTrueStimul;
    AllHowTrueStimul+=HowTrueStimul;
  }
  return AllHowTrueStimul;
}


function doVAR2()  //lllll
{ var i, HowTrueProb=0; var S1, S2, S3, S4; 
  for (i=1; i<=40; i++) {

    if (T7GrInf[i][0]==""){ break; }
    S1= T7GrInf[i][4]; S3= T7GrInf[i][5];
    if (S1.length==0 && S1=="") {
        break;
    }
    if (S3.length==0 && S3=="") {
        break;
    }
    S2= T7GrInf[i][6]; S4= T7GrInf[i][7];

    if ( (S1==S2 && S2.length>0) || (S1==0 && S2=="0") )HowTrueProb++;
  }
  return HowTrueProb;
}


function VdoVAR3()
{ var i, j, len, HowTrueProb=0, k, lenVAR3=0; 
  var Slen, Sst;
  var HowTrueStimul;  // число true стимулов в текущей пробе
  for (i=1; i<=40; i+=5) {
    k=0;
    for (j=i; j<i+5; j++) {
       Slen= T7GrInf[j][3];
       if (Slen=="") break;
       len= parseInt(Slen);
       Sst= T7GrInf[j][8];
       HowTrueStimul= parseInt(Sst);
       if (len*2==HowTrueStimul) k++;
    }
    if(k==5) lenVAR3=len;
  }

  return lenVAR3;
}  


function PRrrr()
{  var objNrrr= document.getElementById("Nrrr");
      objNrrr.firstChild.nodeValue = VVS1;
      objNrrr.style.display=    "block"; 
}



function PR()
{  
   //PRrrr();
   prqq();
}

function lChange() {
  var S1;
  vvvvv=0; nsleep=1000;
  dovis(0,"idBPR");
  S1= getvalue("idlook");
  if(S1=="lookr") {
     vvvvv=1;   dovis(1,"idBPR");
     nsleep=10;
  }
}



