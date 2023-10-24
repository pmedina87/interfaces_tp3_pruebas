class Fichero {
	constructor(posX, posY, contexto, tipo) {
		this.posX = posX; 
		this.posY = posY; 
		this.contexto = contexto;
		this.tipo = tipo;
		this.cantidadFichas = this.setCantidadFichas();
	    this.posXAux = this.posX;
        this.posYAux = this.posY;
        this.dimensionFicha = this.setDimensionFichas();
	}

	setCantidadFichas() {
		if (this.tipo == "4") {
			return 42;
		}
		if (this.tipo == "5") {
			return 56;
		}
		if (this.tipo == "6") {
			return 72;
		}
		if (this.tipo == "7") {
			return 90;
		}
	}

	
	setDimensionFichas() {
		if (this.tipo == "4") {
			return 65;
		}
		if (this.tipo == "5") {
			return 55;
		}
		if (this.tipo == "6") {
			return 45;
		}
		if (this.tipo == "7") {
			return 40;
		}
	}

	
	dibujar() {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                let fichaCreada = new Ficha(
					null,
					this.dimensionFicha,
					this.contexto,
					this.posXAux,
					this.posYAux
				);
                fichaCreada.dibujar(); 
                this.posXAux = this.posXAux + fichaCreada.getDimensionFichas();
                if(columna == this.columnas - 1) {
                    this.posYAux += casillerocreado.getDimensionFichas();
                }                   
            }
            this.posXAux = this.posX;          
        }
	}
}