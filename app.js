window.addEventListener('DOMContentLoaded', ()=>{
    const FPS = 15;
    var cubo = document.getElementById("cub");
    var limites = {
        X: {
            min: 0,
            max: window.innerWidth
        },
        Y: {
            min: 0,
            max: window.innerHeight
        }
    };

    var cubo_log = new Cuerpo(10, 0, {
        X: Math.round(limites.X.max / 2),
        Y: Math.round(limites.Y.max / 2)
    });

    cubo.style.left = cubo_log.pos.X;
    cubo.style.top = cubo_log.pos.Y;

    var casa = new objeto(23);
    
    console.log(casa.get_numero());
    casa.set_numero(60);
    console.log(casa.get_numero());

    var fuerza1 = new Fuerza({X: 10, Y: 10});

    // var timer = window.setInterval(()=>{
    //     cubo_log.mover(limites, fuerza1);
    //     console.log(cubo_log.pos)
    //     cubo.style.left = cubo_log.pos.X;
    //     cubo.style.top = cubo_log.pos.Y;
    // }, 1000/FPS);
});

class Cuerpo{
    constructor(masa, size, pos){
        this.masa = masa;
        this.size = size;
        this.pos  = {
                        X: pos.X,
                        Y: pos.Y
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

    sumarFuerzas(){
        var fuerzas = new Fuerza({X: 0, Y: 0});
        var args = [...arguments];
        args.forEach(nueFuerza => {
            fuerzas.vector.X += nueFuerza.vector.X;
            fuerzas.vector.Y += nueFuerza.vector.Y;
        });
        return fuerzas;
    }

    aplicarVelocidad(){
        this.pos.X += this.vel.X;
        this.pos.Y += this.vel.Y;
    }

    aplicarAceleracion(){
        this.vel.X += this.acc.X;
        this.vel.Y += this.acc.Y;
    }

    aplicarFuerza(fuerza){
        this.acc.X += Math.round(fuerza.vector.X / this.masa);
        this.acc.Y += Math.round(fuerza.vector.Y / this.masa);
    }

    calcularMovimiento(fuerzas){
        this.aplicarFuerza(this.sumarFuerzas(fuerzas));
        this.aplicarAceleracion();
        this.aplicarVelocidad();    
    }

    aplicarLimites(X, Y){
        if(this.pos.X < X.min){
            this.pos.X = X.min;
            this.vel.X *= -1;
        }else if(this.pos.X > X.max){
            this.pos.X = X.max;
            this.vel.X *= -1;
        }

        if(this.pos.Y < Y.min){
            this.pos.Y = Y.min;
            this.vel.Y *= -1;
        }else if(this.pos.Y > Y.max){
            this.pos.Y = Y.max;
            this.vel.Y *= -1;
        }

        this.aplicarVelocidad();
    }

    mover(limites, fuerzas){
        this.calcularMovimiento(fuerzas);
        this.aplicarLimites(limites.X, limites.Y);
    }
}

class Fuerza{
    constructor(vector){
        this.vector = {
                        X: vector.X,
                        Y: vector.Y
        }
    }
}

// posicion CAMBIA CON velocidad

// F= ma

// fuerza sobre cuerpo (masa, aceleracion)

class objeto{

    constructor(numero){
        this._numero = numero;
        this._texto;
    }

    get_numero(){
        return this._numero;
    }

    set_numero(num){
        this._numero = num; 
    }

}


function change(ev){
    console.log(ev);
}

function click(){

    
}