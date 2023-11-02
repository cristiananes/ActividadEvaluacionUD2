export class Carta {
    #palo; // Propiedad privada para el palo
    #nombre; // Propiedad privada para el nombre
  
    constructor(palo, nombre) {
      // Constructor de la clase
      this.#palo = palo;
      this.#nombre = nombre;
    }
  
    // Getter para obtener el palo de la carta
    get palo() {
      return this.#palo;
    }
  
    // Setter para actualizar el palo de la carta
    set palo(newPalo) {
      this.#palo = newPalo;
    }
  
    // Getter para obtener el nombre de la carta
    get nombre() {
      return this.#nombre;
    }
  
    // Setter para actualizar el nombre de la carta
    set nombre(newNombre) {
      this.#nombre = newNombre;
    }
  
    // Método toString para representar la carta como una cadena
    toString() {
      return `${this.#palo}-${this.#nombre.toUpperCase()}`;
    }
  }