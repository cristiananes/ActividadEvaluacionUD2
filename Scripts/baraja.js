import { Carta } from "./carta.js";
export class Baraja {
    #cartas;
    #palos = ["PICAS", "CORAZONES", "TRÉBOLES", "DIAMANTES"];
    #nombres = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  
    constructor() {
      this.#cartas = [];
  
      for (let i = 0; i < this.#palos.length; i++) {
        const fila = [];
        for (let j = 0; j < this.#nombres.length; j++) {
          const carta = new Carta(this.#palos[i], this.#nombres[j]);
          fila.push(carta);
        }
        this.#cartas.push(fila);
      }
    }
  
    generaCarta() {
      const filaAleatoria = Math.floor(Math.random() * this.#cartas.length);
      const columnaAleatoria = Math.floor(Math.random() * this.#cartas[filaAleatoria].length);
      return this.#cartas[filaAleatoria][columnaAleatoria];
    }
  }