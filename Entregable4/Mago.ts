import { Personaje } from './Personaje';

export class Mago extends Personaje {
    private magia: number;

    constructor(nombre: string) {
          super(nombre);
          this.magia = 100;
         }

    public atacar(): void { 
        console.log(`${this.nombre} lanza un hechizo usando ${this.ataques[this.ataques.length - 1]}.`);        
         this.magia -= 10;      
          console.log(`${this.nombre} tiene ${this.magia} de magia restante.`);  
        }

     public regenerarMagia(cantidad: number): void {
         this.magia += cantidad;
          console.log(`${this.nombre} ha regenerado ${cantidad} de magia. Magia actual: ${this.magia}`);
      }

    public evolucionar(): void {
         console.log(`${this.nombre} ha evolucionado a Supermago.`);
         this.nivel += 1;
         this.puntosDeVida += 50;
         this.magia += 50;
        console.log(`Nuevo nivel: ${this.nivel}, Puntos de vida: ${this.puntosDeVida}, Magia: ${this.magia}`);
      }
 }