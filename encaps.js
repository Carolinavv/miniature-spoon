class objeto{

    constructor(numero){
        this._numero = numero;
        this._texto;
    }

    get_numero(){
        return _numero;
    }

    set_numero(num){
        this._numero = num; 
    }

}

function click(){

    var casa = new objeto(23);
    
    console.log(casa.get_numero());
    casa.set_numero(60);
    console.log(casa.get_numero());
}