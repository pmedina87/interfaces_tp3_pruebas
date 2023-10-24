class Jugador {
    constructor(nombre, fichas, fichasJugador) {
        this.nombre = nombre;
        this.fichas = fichas;
        this.fichasJugador;//cantidad de fichas
    }

    getNombre() {
        return this.nombre;
    }
}