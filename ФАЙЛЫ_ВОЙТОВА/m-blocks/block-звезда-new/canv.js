


function doImage(canvas, ss, shapeNo, disx, disy,BR,MR) 
{

        //alert("=0=");
        canvas = canvas.getContext("2d");
        canvas.fillStyle =  ss; // "rgba(200,0,0,.6)";  

        switch (shapeNo)
        {
                case 34:
                {      
                        var i,    N=7, pi= Math.PI;
                        var ax = [],  ay=[];  
                        alpha= 2*pi/(N*2) ;
                        for (i=0; i<=N*2; i++) {
                           ax[i]= Math.cos(alpha*i); ay[i]= Math.sin(alpha*i);
                        }

                        //BR=50;   MR=15;
                        canvas.beginPath();
                        canvas.moveTo(MR*ax[0]+disx, MR*ay[0]+disy);
                        for (i=0; i<=N*2; i++) {
                           if (i % 2 == 1)   A=BR; else A= MR;
                          canvas.lineTo(A*ax[i]+disx, A*ay[i]+disy);
                        }

                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

                case 35:
                {      var i,    N=11, pi= Math.PI;  var ax = [],  ay=[];  
                        alpha= 2*pi/(N*2) ;    Na= pi/2;  //BR=50;   MR=15; 
                        for (i=0; i<=N*2; i++) {
                           ax[i]= Math.cos(alpha*i+Na); ay[i]= Math.sin(alpha*i+Na);
                        }

                        canvas.beginPath();
                        canvas.moveTo(MR*ax[0]+disx, MR*ay[0]+disy);
                        for (i=0; i<=N*2; i++) {
                           if (i % 2 == 1)   A=BR; else A= MR;
                          x=A*ax[i]+disx;   y=A*ay[i]+disy;
                          canvas.lineTo(x, y);
                        }

                        canvas.closePath();
                        canvas.fill();
                        canvas.stroke();
                        break;
                }

        }
}          