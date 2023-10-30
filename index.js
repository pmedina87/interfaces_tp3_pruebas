let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let opc_juego = document.querySelector("#opciones-juego");
let desafio = document.querySelector("#desafio");
let cont_jugador = 0;
let posXInicioTablero = 0;
let posYInicioTablero = 0;
let posXInicioFicha = 10//Math.round(Math.random()*200)
let posYInicioFicha = 10//Math.round(Math.random()*200);
let fichasJugador = 0;
let radio = 15;
let color = "red";
let borderColor="black";

function jugar() {
    opc_juego.removeAttribute("hidden");
}

desafio.addEventListener("change", function () {
	var selectedOption = this.options[this.selectedIndex];
	console.log("Option selected: " + selectedOption.value);
});

// function setearFichas() {
//     console.log(desafio);
// }


// tomo los datos del formulario para setear el juego (segun lo que crearon los usuario)
let formulario = document.querySelector("form")
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataForm = new FormData(formulario);

    let tablero = dataForm.get('tablero');
    let desafio = dataForm.get("desafio");
    let jugador1 = dataForm.get('jugador1');
    let jugador2 = dataForm.get('jugador2');
    let fichasJugador;

    // setear dinamicamente posX y posY de donde comienza el tablero, segun el tipo.
    if(tablero == '4') {
        posXInicioTablero = 195;
        posYInicioTablero = 50;
        fichasJugador = 21;
    }
    if(tablero == '5') {
        posXInicioTablero = 200;
        posYInicioTablero = 55;
        fichasJugador = 28;
    }
    if(tablero == '6') {
        posXInicioTablero = 215;
        posYInicioTablero = 65;
        fichasJugador = 36;
    }
    if(tablero == '7') {
        posXInicioTablero = 215;
        posYInicioTablero = 40;
        fichasJugador = 45;
    }
   
    let tablero_juego = crearTablero(posXInicioTablero, posYInicioTablero, ctx, tablero);
    tablero_juego.dibujar();


    const ficha1 = new Ficha(ctx, posXInicioFicha, posYInicioFicha, radio, color,borderColor);
    

    for (let i=0;i<21;i++){
        posXInicioFicha =30+ Math.round(Math.random()*150);
        posYInicioFicha =30+ Math.round(Math.random()*400);
       
        ficha1.dibujar();  
       // posYInicioFicha= posYInicioFicha+30
    }
     


    

   const ficha2 = new Ficha(ctx, posXInicioFicha, posYInicioFicha , radio, "blue");
    for (let a=0;a<21;a++){
                posXInicioFicha =700+ Math.round(Math.random()*150);
                posYInicioFicha =30+ Math.round(Math.random()*400);
                ficha2.dibujar(); 
                
    }

    
    let jug1 = crearJugador(jugador1);
    // console.log(jug1.getNombre());
    let jug2 = crearJugador(jugador2);
    // console.log(jug2.getNombre());

    // console.log(jugador1.getNombre());

});



function crearTablero(posX, posY, contexto, tablero) {
    return new Tablero(posX, posY, contexto, tablero);
}

function crearJugador(jugador) {
    let jugador_creado;
    if(jugador != "") {
        jugador_creado = new Jugador(jugador);
        cont_jugador ++;
    } else {
        cont_jugador ++;
        let nombre = 'jugador ' + cont_jugador;
        jugador_creado = new Jugador(nombre);
    }
    return jugador_creado;
}


