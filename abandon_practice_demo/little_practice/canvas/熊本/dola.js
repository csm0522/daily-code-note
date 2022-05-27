/**
 * Created by Chan on 16/10/3.
 */
function drawdola(){
    var dola = document.getElementById("dola");
    if(dola.getContext){
        var ctx = dola.getContext('2d');
    }
}
window.onload=function(){
    drawdola();
    drawKumamon();
}

// function dra