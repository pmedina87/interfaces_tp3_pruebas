/*class Ficha {
    constructor(personaje) { 
        this.personaje = personaje;//que personaje elijo
    }

    getColor() {
        return this.personaje ;
      }
}*/


/*
class Ficha {
    constructor(imagen,  contexto, posX, posY) {
        this.imagen = new Image();
        this.imagen.src = "ficha.jpg"; // Asigna la ruta de la imagen al objeto Image
       // this.ancho = ancho;
        //this.alto = alto;
        this.contexto = contexto;
        this.posX = posX;
        this.posY = posY;
        this.imagenCargada = false; // Bandera para verificar si la imagen se ha cargado
        this.imagen.onload = () => {
            this.imagenCargada = true;
            this.dibujar();
        };
    }

    /*getAncho() {
        return this.ancho;
    }

    getAlto() {
        return this.alto;
    }

    dibujar() {
        if (!this.imagenCargada) {
            return; // No  dibuja la imagen si no se ha cargado
        }
             
        this.contexto.drawImage(this.imagen, this.posX, this.posY);
    }
}*/
class Ficha {
    constructor(ctx, x, y, radio, color) {
      this.ctx = ctx ;
      this.x = x;
      this.y = y;
      this.radio = radio;
      this.color = color;
    }
  
    dibujar() {
      this.ctx .beginPath();
      this.ctx .arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
      this.ctx .fillStyle = this.color;
      this.ctx .fill();
      this.ctx .closePath();
    }
  }