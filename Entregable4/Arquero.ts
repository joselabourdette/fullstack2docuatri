import { Personaje } from './Personaje';

export class Arquero extends Personaje {
  private punteria: number;

    constructor(nombre: string) {
         super(nombre);
          this.punteria = 90;
       }

    public atacar(): void {
          console.log(`${this.nombre} dispara una flecha  usando ${this.ataques[this.ataques.length - 1]}.`);
         this.punteria -= 3;
          console.log(`${this.nombre} tiene ${this.punteria} puntos de precisión restantes.`);
      }

    public afinarTiro(cantidad: number): void {
           this.punteria += cantidad;
         console.log(`${this.nombre} ha afinado su tiro. Precisión actual: ${this.punteria}`);
     }

    public evolucionar(): void {
      console.log(`${this.nombre} ha evolucionado a Maestro Arquero.`);
         this.nivel += 1;
       this.puntosDeVida += 60;
     this.punteria += 20;
     console.log(`Nuevo nivel: ${this.nivel}, Puntos de vida: ${this.puntosDeVida}, Precisión: ${this.punteria}`);
     }
  }