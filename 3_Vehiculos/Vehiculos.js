// 3. Construct a Vehicle class, that inherits the classes, "plane", "car", "Train", with the inherited methods run, stop, and action, the
// action method must change with the children,
// Ex: car drive, avion fly, train travel

class Vehicle{
    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    run(){
        return console.log("the means of transport is running");
    }

    stop(){
        return console.log("the means of transport is stopping");
    }

    action(){
        return console.log("vehicle state is:  ");
    }
}

class Plane extends Vehicle{

    constructor(nombre,identificador){
        super(nombre);
        this._identificador = identificador;
    }

    get identificador(){
        return this._identificador;
    }

    action(){
        return console.log("vehicle state is:  " + "avion fly");
    }

}

class Train extends Vehicle{

    constructor(nombre,UIC){
        super(nombre);
        this._UIC = UIC;
    }

    get UIC(){
        return this._UIC;
    }

    action(){
        return console.log("vehicle state is:  " + "train travels");
    }

}


class Car extends Vehicle{

    constructor(nombre,Matricula){
        super(nombre);
        this._Matricula = Matricula;
    }

    get Matricula(){
        return this._Matricula;
    }

    action(){
        return console.log("vehicle state is:  " + "car drives");
    }

}

let vehiculo01 = new Plane().action();
let vehiculo02 = new Train().action();
let vehiculo03 = new Car().action();