import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

export class RegistroAutomotor {
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    public constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

    // Método para agregar vehículos con validaciones
    public agregarAuto(auto: Auto): void {
        let patente = auto.getPatente();
        let marca = auto.getMarca();
        let modelo = auto.getModelo();
        let anio = auto.getAnio();

        if (!patente || patente.length < 3) {
            console.log('El formato de la patente es incorrecto');
            return;
        }

        if (!marca || marca.trim() === '' || marca.length < 1) {
            console.log('La marca es incorrecta');
            return;
        }

        if (!modelo || modelo.trim() === '' || modelo.length < 1) {
            console.log('El modelo es incorrecto');
            return;
        }

        if (!anio || anio < 1900 || anio > 2024) {
            console.log('El formato del año es incorrecto');
            return;
        }

        this.autos.push(auto);
        console.log(`Auto ${auto.getMarca()} ${auto.getModelo()} ${auto.getPatente()} agregado correctamente.`);
    }

    public agregarMoto(moto: Moto): void {
        let patente = moto.getPatente();
        let marca = moto.getMarca();
        let modelo = moto.getModelo();
        let anio = moto.getAnio();

        if (!patente || patente.length < 3) {
            console.log('El formato de la patente es incorrecto');
            return;
        }

        if (!marca || marca.trim() === '' || marca.length < 1) {
            console.log('La marca es incorrecta');
            return;
        }

        if (!modelo || modelo.trim() === '' || modelo.length < 1) {
            console.log('El modelo es incorrecto');
            return;
        }

        if (!anio || anio < 1900 || anio > 2024) {
            console.log('El formato del año es incorrecto');
            return;
        }


        this.motos.push(moto);
        console.log(`Moto ${moto.getMarca()} ${moto.getModelo()} ${moto.getPatente()} agregada correctamente.`);
    }

    public agregarCamion(camion: Camion): void {
        let patente = camion.getPatente();
        let marca = camion.getMarca();
        let modelo = camion.getModelo();
        let anio = camion.getAnio();

        if (!patente || patente.length < 3) {
            console.log('El formato de la patente es incorrecto');
            return;
        }

        if (!marca || marca.trim() === '' || marca.length < 1) {
            console.log('La marca es incorrecta');
            return;
        }

        if (!modelo || modelo.trim() === '' || modelo.length < 1) {
            console.log('El modelo es incorrecto');
            return;
        }

        if (!anio || anio < 1900 || anio > 2024) {
            console.log('El formato del año es incorrecto');
            return;
        }


        this.camiones.push(camion);
        console.log(`Camión ${camion.getMarca()} ${camion.getModelo()} ${camion.getPatente()} agregado correctamente.`);
    }

    // Método para mostrar todos los autos
    public mostrarAutos(): void {
        if (this.autos.length === 0) {
            console.log("No hay autos registrados.");
            return;
        }

        console.log("Lista de Autos Registrados:");
        this.autos.forEach((auto, index) => {
            console.log(`Posición: ${index} Marca: ${auto.getMarca()}, Modelo: ${auto.getModelo()}, Año: ${auto.getAnio()}, Patente: ${auto.getPatente()}`);
        });
    }

    // Método para mostrar todas las motos
    public mostrarMotos(): void {
        if (this.motos.length === 0) {
            console.log("No hay motos registradas.");
            return;
        }

        console.log("Lista de Motos Registradas:");
        this.motos.forEach((moto, index) => {
            console.log(`Posición: ${index} Marca: ${moto.getMarca()}, Modelo: ${moto.getModelo()}, Año: ${moto.getAnio()}, Patente: ${moto.getPatente()}`);
        });
    }

    // Método para mostrar todos los camiones
    public mostrarCamiones(): void {
        if (this.camiones.length === 0) {
            console.log("No hay camiones registrados.");
            return;
        }

        console.log("Lista de Camiones Registrados:");
        this.camiones.forEach((camion, index) => {
            console.log(`Posición: ${index} Marca: ${camion.getMarca()}, Modelo: ${camion.getModelo()}, Año: ${camion.getAnio()}, Patente: ${camion.getPatente()}`);
        });
    }

    // Método para modificar un vehículo usando el indice del arreglo
    public modificarAuto(index: number, nuevoAuto: Auto): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos[index] = nuevoAuto;
            console.log(`Auto en la posición ${index} modificado correctamente.`);
        } else {
            console.log("Índice de auto no válido.");
        }
    }

    public modificarMoto(index: number, nuevaMoto: Moto): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos[index] = nuevaMoto;
            console.log(`Moto en la posición ${index} modificada correctamente.`);
        } else {
            console.log("Índice de Moto no válido.");
        }
    }

    public modificarCamion(index: number, nuevoCamion: Camion): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones[index] = nuevoCamion;
            console.log(`Camion en la posición ${index} modificado correctamente.`);
        } else {
            console.log("Índice de auto no válido.");
        }
    }

    // Método para dar de baja un auto usando el indice del arreglo
    public eliminarAuto(index: number): void {
        if (index >= 0 && index < this.autos.length) {
            const autoEliminado = this.autos.splice(index, 1);
            console.log(`Auto "${autoEliminado[0].getMarca()} ${autoEliminado[0].getModelo()}" eliminado correctamente.`);
        } else {
            console.log("Índice de auto no válido.");
        }
    }

    // Método para dar de baja una moto usando el indice del arreglo
    public eliminarMoto(index: number): void {
        if (index >= 0 && index < this.motos.length) {
            const motoEliminada = this.motos.splice(index, 1);
            console.log(`Moto "${motoEliminada[0].getMarca()} ${motoEliminada[0].getModelo()}" eliminado correctamente.`);
        } else {
            console.log("Índice de moto no válido.");
        }
    }

    // Método para dar de baja un camion usando el indice del arreglo
    public eliminarCamion(index: number): void {
        if (index >= 0 && index < this.camiones.length) {
            const camionEliminado = this.camiones.splice(index, 1);
            console.log(`Camion "${camionEliminado[0].getMarca()} ${camionEliminado[0].getModelo()}" eliminado correctamente.`);
        } else {
            console.log("Índice de camion no válido.");
        }
    }

    // Método para consultar un vehículo por patente indisitintamente sea moto, auto o camion
    public consultarVehiculo(patente: string): any | null {
        const auto = this.autos.find(auto => auto.getPatente() === patente);
        const moto = this.motos.find(moto => moto.getPatente() === patente);
        const camion = this.camiones.find(camion => camion.getPatente() === patente);

        if (auto) {
            console.log(`Vehículo encontrado: Marca: ${auto.getMarca()}, Modelo: ${auto.getModelo()}, Año: ${auto.getAnio()}, Patente: ${auto.getPatente()}`);
            return auto;
        } else if (moto) {
            console.log(`Vehículo encontrado: Marca: ${moto.getMarca()}, Modelo: ${moto.getModelo()}, Año: ${moto.getAnio()}, Patente: ${moto.getPatente()}`);
            return moto;
        } else if (camion) {
            console.log(`Vehículo encontrado: Marca: ${camion.getMarca()}, Modelo: ${camion.getModelo()}, Año: ${camion.getAnio()}, Patente: ${camion.getPatente()}`);
            return camion;
        } else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
            return null;
        }
    }


    // Getters
    public getAutos(): Auto[] {
        return this.autos;
    }

    public getMotos(): Moto[] {
        return this.motos;
    }

    public getCamiones(): Camion[] {
        return this.camiones;
    }

}