import { Motor, Rueda } from './Auto';

export class Camion {
    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private motor: Motor;
    private ruedas: Rueda[];

    public constructor(patente: string, marca: string, modelo: string, anio: number, motor: Motor, ruedas: Rueda[]) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.motor = motor;
        this.ruedas = ruedas;
    }

    // Getters
    public getPatente(): string {
        return this.patente;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getMotor(): Motor {
        return this.motor;
    }

    public getRuedas(): Rueda[] {
        return this.ruedas;
    }

    // Setters
    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public setMarca(marca: string): void {   
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

    public setMotor(motor: Motor): void {
        this.motor = motor;
    }

    public setRuedas(ruedas: Rueda[]): void {
        this.ruedas = ruedas;
    }
}