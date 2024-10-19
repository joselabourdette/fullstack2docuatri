import { Personaje } from './Personaje';

export class Luchador extends Personaje {       
    private fuerza: number;  

    constructor(nombre: string) {       
      super(nombre);    
       this.fuerza = 80;   
     }       

    public atacar(): void {             
      console.log(`${this.nombre} golpea con su espada usando ${this.ataques[this.ataques.length - 1]}.`);     
       this.fuerza -= 5; 
       console.log(`${this.nombre} tiene ${this.fuerza} puntos de fuerza restantes.`);  
     }

    public entrenar(cantidad: number): void {  
      this.fuerza += cantidad; 
       console.log(`${this.nombre} ha entrenado y ganado ${cantidad} de fuerza. Fuerza actual: ${this.fuerza}`);  
     }

    public evolucionar(): void {   
      console.log(`${this.nombre} ha evolucionado a Maestro de la espada.`);  
      this.nivel += 1;   
      this.puntosDeVida += 75;  
       this.fuerza += 25; 
       console.log(`Nuevo nivel: ${this.nivel}, Puntos de vida: ${this.puntosDeVida}, Fuerza: ${this.fuerza}`);  
     } 
  }