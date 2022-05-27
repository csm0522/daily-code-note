/**
 * Created by Chan on 16/10/3.
 */

//Main
function drawKumamon(){
    var ku = document.getElementById("kumamon");
    if(ku.getContext){
        var ct = ku.getContext('2d');
    }

    //circle of the bear
    paintCircle(ct,250,224,191,2,"#fff");
    paintbody(ct,128,241,245,40,334,140,"#333");
    //left ear
    paintCircle(ct,138,120,28,2,"#333");
    paintCircle(ct,138,120,15,2,"#fff");
    //right ear
    paintCircle(ct,365,120,28,2,"#333");
    paintCircle(ct,365,120,15,2,"#fff");
    //head
    paintEllipse(ct,250,210,140,118,2,"#333");
    //EyaBrow
    paintEyeBrow(ct,20,10,168,153,150,32,"#fff");
    paintEyeBrow(ct,20,10,298,150,153,32,"#fff");
    //eyes
    ct.moveTo(160,185);
    paintRotateEllipse(ct,186,185,26,27,2,"#fff",90);
    ct.moveTo(182,185);
    paintEllipse(ct,192,185,4,10,2,"#333");

    ct.moveTo(273,185);
    paintRotateEllipse(ct,300,185,26,27,2,"#fff",90);
    ct.moveTo(308,185);
    paintEllipse(ct,312,185,4,10,2,"#333");
    //mouth
    ct.moveTo(186,243);
    paintEllipse(ct,251,243,65,52,2,"#fff");

    paintMouth(ct,240,196,250,110,"#333");
    paintMouth(ct,290,196,250,110,"#333");
    //nose
    ct.moveTo(228,217);
    paintEllipse(ct,248,217,20,17,1,"#333");
    ct.moveTo(228,142);
    paintRotateEllipse(ct,248,142,20,13,1,"#333",180);

    paintCircle(ct,115,220,30,2,v_color);
    paintCircle(ct,385,220,30,2,v_color);
    ct.globalCompositeOperation="destination-over";
    paintTxt(ct,"Hello World!!!","#fff");
    paintBGC(ct,v_color);

}
//句拐
var EventUtil = {
    addHandler:function(ele,type,handler){
        if(ele.addEventListener){
            ele.addEventListener(type,handler,false);
        }
        else if(ele.attachEvent){
            ele.attachEvent('on'+type,handler);
        }
        else{
            ele['on'+type]=handler;
        }
    },
    removeHandler:function(ele,type,handler){
        if(ele.removeEventListener){
            ele.removeEventListener(type,handler,false);
        }
        else if(ele.detachEvent){
            ele.detachEvent('on'+type,handler);
        }
        else{
            ele['on'+type]=null;
        }
    }
}
//画背景
function paintBGC(ct,scolor){
    v_color = scolor;
    ct.fillStyle = scolor;
    ct.fillRect(0,0,500,500);

}
//画圆形
var v_color = "rgb(174,0,0)";
function paintCircle(ct,x,y,r,i,scolor){
    ct.beginPath();
    ct.moveTo(x-r,y);
    ct.arc(x,y,r,0,i*Math.PI,false);
    ct.fillStyle = scolor;
    ct.fill();
    ct.closePath();
}
//画椭圆
function paintEllipse(ct,x,y,a,b,i,scolor){
    ct.save();
    var r = (a>b) ? a:b;
    var ratiox = a/r;
    var ratioy = b/r;
    ct.scale(ratiox,ratioy);
    ct.beginPath();
    ct.arc(x/ratiox,y/ratioy,r,0,i*Math.PI,false);
    ct.closePath();
    ct.restore();
    ct.fillStyle=scolor;
    ct.fill();
}
//二次贝塞尔曲线,ct,h1高度,
function paintEyeBrow(ct,h1,h2,x0,y0,y1,d,scolor){
    ct.beginPath();
    ct.moveTo(x0,y0);//开始点
    var x1 = x0 + d;
    var kzx1=x0+d/2;
    var kzy1=y0-h1;
    var kzy2=y0-h2;
    ct.quadraticCurveTo(kzx1,kzy1,x1,y1);
    ct.quadraticCurveTo(kzx1,kzy2,x0,y0);
    ct.fillStyle=scolor;
    ct.fill();
}
function paintRotateEllipse(ct,x,y,a,b,i,scolor,angle){
    ct.save();
    var r = (a>b) ? a:b;
    var ratiox = a/r;
    var ratioy = b/r;
    ct.translate(x/ratiox,y/ratioy);
    ct.rotate(angle * Math.PI/180);
    ct.scale(ratiox,ratioy);
    ct.beginPath();
    ct.arc(0,0,r,0,i*Math.PI,false);
    ct.closePath();
    ct.restore();
    ct.fillStyle=scolor;
    ct.fill();
}
function paintMouth(ct,cpy,x0,y0,d,scolor){
    ct.save();
    ct.beginPath();
    ct.moveTo(x0,y0);
    var x1 = x0 + d;
    var cpx = x0 +d/2;
    ct.quadraticCurveTo(cpx,cpy,x1,y0);
    ct.closePath();
    ct.restore();
    ct.fillStyle = scolor;
    ct.fill();
}
function paintbody(ct,x0,y0,rectw,recth,trapw,traph,scolor){
   var x1 = x0-(trapw-rectw)/2;
   var y1 = y0+traph+recth;
    ct.beginPath();
    ct.moveTo(x0,y0+recth);
    ct.lineTo(x1,y1);
    ct.lineTo(x1+trapw,y1);
    ct.lineTo(x0+rectw,y0+recth);
    ct.closePath();
    ct.fillStyle=scolor;
    ct.globalCompositeOperation="source-atop";
    ct.fill();
    ct.moveTo(x0,y0);
    ct.lineTo(x0+rectw,y0);
    ct.lineTo(x0+rectw,y0+recth);
    ct.lineTo(x0,y0+recth);
    ct.lineTo(x0,y0);
    ct.fill();
}
function paintTxt(ct,txt,scolor){
    ct.font = 'bold 36px Arial';
    ct.textAlign="center";
    ct.textBaseline="middle";
    ct.fillStyle=scolor;
    ct.fillText(txt,250,462);
}