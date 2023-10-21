let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let opc_juego = document.querySelector("#opciones-juego");
let desafio = document.querySelector("#desafio");
let cont_jugador = 0;
let posXInicioTablero = 0;
let posYInicioTablero = 0;
let fichasJugador = 0;
// let jugador1;
// let jugador2;
// const ancho = canvas.width;
// const alto = canvas.heigth;

// let ubicacionx = ancho / 2;
// let ubicaciony = alto / 2;

// let ctx = canvas.getContext("2d");

// //rectangulo
// ctx.fillStyle = "#FFAABB";
// ctx.fillRect(0, 0, 250, 175); // fillRect( x,y,width,height ) 

// // x => width
// // y => height
// //linea
// ctx.moveTo(0, 0); //moveTo(x,y) - define el punto inicial de la línea
// ctx.lineTo(250, 175); // lineTo( x,y ) - define el punto final de la línea

// ctx.moveTo(0, 175);
// ctx.lineTo(250, 0);
// ctx.stroke();

// //ciruclo
// ctx.beginPath(); // comienza un camino
// ctx.arc(400, 200, 140, 0, 2 * Math.PI); // arc(x, y, r, startangle, endangle) 
// ctx.stroke();

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


