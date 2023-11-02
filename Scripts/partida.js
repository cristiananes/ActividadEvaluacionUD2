
  export class Partida {
    #filas;
    #columnas;
    #baraja;
    #cartasSeleccionadas;
    #mazo;
    #cartaVolteada;
    #aciertos;
    #numeroIntentos;
  
    constructor(filas, columnas) {
      this.#filas = filas;
      this.#columnas = columnas;
      this.#baraja = new Baraja();
      this.#cartasSeleccionadas = [];
      this.#mazo = new Array(this.#filas).fill(null).map(() => new Array(this.#columnas).fill(null));
      this.#cartaVolteada = null;
      this.#aciertos = 0;
      this.#numeroIntentos = 0;
    }
  
    selecciona() {
      while (this.#cartasSeleccionadas.length < (this.#filas * this.#columnas)/2) {
        const nuevaCarta = this.#baraja.generaCarta();
        if (!this._cartaEnMazo(nuevaCarta)) {
          this.#cartasSeleccionadas.push(nuevaCarta);
          this.#cartasSeleccionadas.push(nuevaCarta);
        }
      }
    }
  
    baraja() {
      this.#cartasSeleccionadas.sort(() => Math.random() - 0.5);
    }
  
    reparte() {
      for (let i = 0; i < this.#filas; i++) {
        for (let j = 0; j < this.#columnas; j++) {
          this.#mazo[i][j] = this.#cartasSeleccionadas.pop();
        }
      }
    }
  
    voltea(fila, columna) {
      this.#cartaVolteada = { fila, columna };
      this.#numeroIntentos++;
    }
  
    compruebaAcierto(fila, columna) {
      const cartaVolteada = this.#mazo[this.#cartaVolteada.fila][this.#cartaVolteada.columna];
      const cartaActual = this.#mazo[fila][columna];
  
      if (cartaVolteada && cartaActual && cartaVolteada.toString() === cartaActual.toString()) {
        this.#aciertos++;
        return true;
      }
  
      return false;
    }
  
    haFinalizado() {
      return this.#aciertos === this.#filas * this.#columnas / 2;
    }
  
    _cartaEnMazo(carta) {
        for (let i = 0; i < this.#mazo.length; i++) {
          for (let j = 0; j < this.#mazo[i].length; j++) {
            const c = this.#mazo[i][j];
            if (c && c.toString() === carta.toString()) {
              return true;
            }
          }
        }
        return false;
      }
      
  }
  
  // Ejemplo de uso de la clase "Partida"
  const miPartida = new Partida(4, 4);
  miPartida.selecciona();
  miPartida.baraja();
  miPartida.reparte();
  // Realiza las operaciones de voltea, compruebaAcierto y haFinalizado según el juego.
  