import { Personaje } from './Personaje';
import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquero } from './Arquero';

const mago = new Mago('Orko');
const luchador = new Luchador('He-Man');
const arquero = new Arquero('Bow');

function batalla(personaje: Personaje) {
            personaje.atacar(); 
            personaje.defender();  
            personaje.recibirDanio(20); 
            personaje.curar(15);  
            }

batalla(mago);

batalla(luchador);

batalla(arquero);

mago.evolucionar();

luchador.evolucionar();

arquero.evolucionar();

function abrirCajaMagica(personaje: Personaje) {    
    console.log(`Has descubierto una caja mágica abierta`);     

    const nuevoAtaque = 'Explosión Mágica'; 
    personaje.aprenderAtaque(nuevoAtaque);  
}   

abrirCajaMagica(mago);


mago.atacar();
