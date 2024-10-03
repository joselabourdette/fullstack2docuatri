import { Motor, Rueda, Vehiculo } from './Vehiculo';

export class Auto extends Vehiculo {
    public constructor(patente: string, marca: string, modelo: string, anio: number, motor: Motor, ruedas: Rueda[]) {
        super(patente, marca, modelo, anio, motor, ruedas);
    }
}