

function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('Ford', 'Explorer', 'Rojo', 2015, 'Maria Estrella');
let automovil2 = new Automovil('Audi', 'Exchange', 'Azul', 2020, 'Joselito Perez');
let automovil3= new Automovil('Mercedes', 'Nativo', 'Beige', 2022, 'Lola Rodriguez');
let automoviles = [automovil1, automovil2, automovil3];

//Aqui cambiamos la propiedad titular dentro del prototipo del objeto
Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encenderAutomovil = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutomoviles(){
    let lista = document.getElementById('listaAutomoviles');

    for(let automovil of automoviles) {
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
    
}