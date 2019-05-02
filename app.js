window.addEventListener('DOMContentLoaded', ()=>{
    var fps = 15;
    var cubo = document.getElementById("cub");
    var i = 0;
    var Hmax = window.innerHeight;
    var Hmin = 0;
    var Wmax = window.innerWidth;
    var Wmin = 0;
    var pos = [Math.random() * (Wmax - Wmin) + Wmin, Math.random() * (Hmax - Hmin) + Hmin];
    cubo.style.left = pos[0];
    cubo.style.top = pos[1];
    var left = pos[0] + (i *10);
    var top = pos[1] + (i *10);
    var timer = window.setInterval(()=>{
        i++;
        if(left < 0) left = Wmax;
        else left = left[0] + (i *10);
        if(left > Wmax) left = 0;
        else left = left[0] + (i *10);
        if(top < 0) top = Hmax;
        else top = top[1] + (i *10);
        if(top < Hmax) top = 0;
        else top = top[1] + (i *10);
        cubo.style.left = left + "px" ;
        cubo.style.top =  top + "px";
    }, 1000/fps);
});