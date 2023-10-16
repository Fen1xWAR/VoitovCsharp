


// Renders image.
function renderImage(canvas, backgroundNo, shapeNo, x, y, size, margin)
{

        var backgrounds =  //color array
        [
                "rgba(255,255,255,.6)",

                "rgba(127,127,255,.6)",    //светлосиний
                "rgba(255,127,127,.6)",
                "rgba(63,255,63,.6)",

                "rgba(200,200,100,.6)",
                "rgba(250,0,0,.6)",       //красный
                "rgba(0,250,0,.6)",       //зеленый
                "rgba(0,0,250,.6)",       //синий
                "rgba(0,255,255,.6)",
                "rgba(128,128,128,.6)",
                "rgba(0,0,128,.6)",
                "rgba(192,192,192,.6)",
                "rgba(0,128,0,.6)",
                "rgba(128,128,0,.6)",
                "rgba(0,128,128,.6)",
                "rgba(128,0,128,.6)",
                "rgba(255,255,255,.6)",
                "rgba(255,0,255,.6)",
                "rgba(128,0,0,.6)",
                "rgba(255,255,0,.6)",
                "rgb(100,200,200)",
                "rgb(100,200,0)",
                "rgb(100,0,200)",
                "rgb(50,120,100)"
        ];

        canvas = canvas.getContext("2d");
        canvas.clearRect(x, y, size, size);
        canvas.fillStyle = backgrounds[backgroundNo];

        x += margin;
        y += margin;

        size -= 2 * margin;

        // alert("=2= c ==  shapeNo="+shapeNo);

        switch (shapeNo)
        {

                case 0:
                {
                        break;
                }

                case 1:
                {
                        canvas.beginPath();
                        canvas.moveTo(x, y);
                        canvas.lineTo(x + size, y);
                        canvas.lineTo(x + size, y + size);
                        canvas.lineTo(x, y + size);

                        canvas.moveTo(x, y);
                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

                case 2:
                {
                        canvas.beginPath();
                        canvas.moveTo(x, y);
                        canvas.lineTo(x, y + size);
                        canvas.lineTo(x + size, y + size);
                        canvas.lineTo(x, y);
                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

                case 3:
                {
                        canvas.beginPath();
                        canvas.moveTo(x + size, y);
                        canvas.lineTo(x + size, y + size);
                        canvas.lineTo(x, y + size);
                        canvas.lineTo(x + size, y);
                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }


                case 4:
                {
                        canvas.beginPath();
                        canvas.moveTo(x, y);
                        canvas.lineTo(x + size / 2, y + size / 2);
                        canvas.lineTo(x + size, y);
                        canvas.lineTo(x + size, y + size);
                        canvas.lineTo(x, y + size);
                        canvas.lineTo(x, y);
                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

                case 33:
                {
                        var i,    N=4, pi= Math.PI, a=2*pi/5,  alpha= 0;
                        var R=size / 2;  var ax = [],  ay=[];  
                        ax[0]=0;  ay[0]=1;  // верх звезды координаты: 0,1        [0,0, 2,2] --> радиус = 1
                        for (i=1; i<=N; i++) {
                           alpha= pi/2 + a*i;
                           ax[i]= Math.cos(alpha); ay[i]= Math.sin(alpha);
                        }

                        canvas.beginPath();
                        canvas.moveTo(x+R, y);
                        canvas.lineTo(x +R + R*ax[2], y+R-R*ay[2]);
                        canvas.lineTo(x +R + R*ax[4], y+R-R*ay[4]);
                        canvas.lineTo(x +R + R*ax[1], y+R-R*ay[1]);
                        canvas.lineTo(x +R + R*ax[3], y+R-R*ay[3]);
                        canvas.lineTo(x +R , y);

                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }


                case 34:
                {      
                        var i,    N=7, pi= Math.PI;
                        var ax = [],  ay=[];  
                        alpha= 2*pi/(N*2) ;
                        for (i=0; i<=N*2; i++) {
                           ax[i]= Math.cos(alpha*i); ay[i]= Math.sin(alpha*i);
                        }

                        BR=50;   MR=15;
                        canvas.beginPath();
                        canvas.moveTo(MR*ax[0]+200, MR*ay[0]+200);
                        for (i=0; i<=N*2; i++) {
                           if (i % 2 == 1)   A=BR; else A= MR;
                          canvas.lineTo(A*ax[i]+200, A*ay[i]+200);
                        }

                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

                case 35:
                {      var i,    N=11, pi= Math.PI;  var ax = [],  ay=[];  
                        alpha= 2*pi/(N*2) ;    Na= pi/2;  BR=50;   MR=15; dis=200;
                        for (i=0; i<=N*2; i++) {
                           ax[i]= Math.cos(alpha*i+Na); ay[i]= Math.sin(alpha*i+Na);
                        }

                        canvas.beginPath();
                        canvas.moveTo(MR*ax[0]+200, MR*ay[0]+dis);
                        for (i=0; i<=N*2; i++) {
                           if (i % 2 == 1)   A=BR; else A= MR;
                          x=A*ax[i]+dis;   y=A*ay[i]+dis;
                          canvas.lineTo(x, y);
                        }

                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }









                default:
                        break;
        }

}