export abstract class Personaje {       
    protected nombre: string;  
    protected nivel: number;                
    protected puntosDeVida: number;     
    protected ataques: string[];  

    constructor(nombre: string) {  
            this.nombre = nombre;  
            this.nivel = 1;  
            this.puntosDeVida = 100;    
            this.ataques =['Golpe simple']    
        }

    public atacar(): void { 
        const ataque = this.ataques[Math.floor(Math.random() * this.ataques.length)]; 
        console.log(`${this.nombre} está atacando.`); 
        } 

    public aprenderAtaque(nuevoAtaque: string) {    
        this.ataques.push(nuevoAtaque); 
        console.log(`${this.nombre} ha aprendido un nuevo ataque: ${nuevoAtaque}.`);    
        }   

    public defender(): void { 
        console.log(`${this.nombre} se está defendiendo.`); 
        } 

    public abstract evolucionar(): void;  

    public recibirDanio(danio: number): void {      
        this.puntosDeVida -= danio; 
        console.log(`${this.nombre} recibió ${danio} puntos de daño. Puntos de vida restantes: ${this.puntosDeVida}`);  
        }


    public curar(vida: number): void {      
        this.puntosDeVida += vida; 
        console.log(`${this.nombre} ha ganado ${vida} puntos de vida. Puntos de vida actuales: ${this.puntosDeVida}`);  
     }
 }

