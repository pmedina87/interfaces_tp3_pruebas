class Casillero {
    constructor(imagen, ancho, alto, contexto, posX, posY) {
        this.imagen = new Image();
        this.imagen.src = "casillero.jpg"; // Asigna la ruta de la imagen al objeto Image
        this.ancho = ancho;
        this.alto = alto;
        this.contexto = contexto;
        this.posX = posX;
        this.posY = posY;
        this.imagenCargada = false; // Bandera para verificar si la imagen se ha cargado
        this.imagen.onload = () => {
            this.imagenCargada = true;
            this.dibujar();
        };
    }

    getAncho() {
        return this.ancho;
    }

    getAlto() {
        return this.alto;
    }

    dibujar() {
        if (!this.imagenCargada) {
            return; // No  dibuja la imagen si no se ha cargado
        }
             
        this.contexto.drawImage(this.imagen, this.posX, this.posY, this.ancho, this.alto);
    }
}