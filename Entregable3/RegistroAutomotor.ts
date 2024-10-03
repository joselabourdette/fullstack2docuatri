import { Vehiculo } from './Vehiculo';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    public constructor() {
        this.vehiculos = [];
    }

    // Método para agregar un vehiculo con las propiedades generales que van a heredar todos los autos motos y camiones
    public agregarVehiculo(vehiculo: Vehiculo): void {
        let patente = vehiculo.getPatente();
        let marca = vehiculo.getMarca();
        let modelo = vehiculo.getModelo();
        let anio = vehiculo.getAnio();

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

        this.vehiculos.push(vehiculo);
        console.log(`Vehículo ${vehiculo.getMarca()} ${vehiculo.getModelo()} ${vehiculo.getPatente()} agregado correctamente.`);
    }

    // Método para mostrar vehículos por tipo
    public mostrarVehiculosPorTipo(tipo: string): void {
        const vehiculosFiltrados = this.vehiculos.filter(v => v.constructor.name === tipo);
        if (vehiculosFiltrados.length === 0) {
            console.log(`No hay ${tipo} registrados.`);
            return;
        }

        console.log(`Lista de tipo ${tipo} Registrados:`);
        vehiculosFiltrados.forEach((vehiculo, index) => {
            console.log(`Posición: ${index} Marca: ${vehiculo.getMarca()}, Modelo: ${vehiculo.getModelo()}, Año: ${vehiculo.getAnio()}, Patente: ${vehiculo.getPatente()}`);
        });
    }

     // Método para mostrar el contenido del arreglo de vehículos
     public mostrarVehiculos(): void {
        if (this.vehiculos.length === 0) {
            console.log("No hay vehículos registrados.");
            return;
        }
        console.log("Mostrando lista de vehículos registrados por indice");
        
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index}:  Tipo: ${vehiculo.constructor.name}  Patente: ${vehiculo.getPatente()}  Marca: ${vehiculo.getMarca()}  Modelo: ${vehiculo.getModelo()}  Año: ${vehiculo.getAnio()}`);
            console.log('---------------------------');
        });
    }

    // Método para modificar un vehículo usando el indice del arreglo
    public modificarVehiculo(index: number, nuevoVehiculo: Vehiculo): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = nuevoVehiculo;
            console.log(`Vehículo en la posición ${index} modificado correctamente.`);
        } else {
            console.log("Índice de vehículo no válido.");
        }
    }

    // Método para eliminar un vehículo usando el indice del arreglo
    public eliminarVehiculo(index: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            const vehiculoEliminado = this.vehiculos.splice(index, 1);
            console.log(`Vehículo "${vehiculoEliminado[0].getMarca()} ${vehiculoEliminado[0].getModelo()}" eliminado correctamente.`);
        } else {
            console.log("Índice de vehículo no válido.");
        }
    }

    // Método para consultar un vehículo por patente
    public consultarVehiculo(patente: string): Vehiculo | null {
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);
        if (vehiculo) {
            console.log(`Vehículo encontrado: Marca: ${vehiculo.getMarca()}, Modelo: ${vehiculo.getModelo()}, Año: ${vehiculo.getAnio()}, Patente: ${vehiculo.getPatente()}`);
            return vehiculo;
        } else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
            return null;
        }
    }
}