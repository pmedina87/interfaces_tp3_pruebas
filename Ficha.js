
class Ficha {
    constructor(ctx, posXInicioFicha, posYInicioFicha, radio,color) {
      this.ctx = ctx ;
      this.posXInicioFicha = posXInicioFicha;
      this.posYInicioFicha =posYInicioFicha;
      this.radio = radio;
      this.color = color;
      this.seleccionada=false;
    }
  
    dibujar() {
      this.ctx .beginPath();
      this.ctx .arc(posXInicioFicha, posYInicioFicha, this.radio, 0, 2 * Math.PI);
      this.ctx .fillStyle = this.color;
      this.ctx .fill();
      this.ctx .closePath();
    }
  }