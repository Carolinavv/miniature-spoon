window.addEventListener('DOMContentLoaded', ()=>{
    var fps = 15;
    var cubo = document.getElementById("cub");
    var timer = window.setInterval(()=>{

    }, 1000/fps);
});

class cuerpo{
    constructor(masa, size){
        this.masa = masa;
        this.size = size;
        this.pos  = {
                        X: 0,
                        Y: 0
                    };
        this.vel  = {
                        X: 0,
                        Y: 0
                    };
        this.acc  = {
                        X: 0,
                        Y: 0
                    };
    }

    mover(){
        var fuerzas = 0;
        arguments.array.forEach(fuerza => {
            fuerzas += element;
        });
    }
}

posicion CAMBIA CON velocidad

F= ma

fuerza sobre cuerpo (masa, aceleracion)
