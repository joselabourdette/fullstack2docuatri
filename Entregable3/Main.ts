import { Motor, Rueda } from './Vehiculo';
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { RegistroAutomotor } from './RegistroAutomotor';

// Crear motores y ruedas
const motorAuto = new Motor('Nafta');
const motorMoto = new Motor('Mezcla');
const motorCamion = new Motor('Diesel');

const ruedasAuto = [new Rueda(16), new Rueda(16), new Rueda(16), new Rueda(16)];
const ruedasMoto = [new Rueda(14), new Rueda(14)];
const ruedasCamion = [new Rueda(22), new Rueda(22), new Rueda(22), new Rueda(22)];

// Crear vehículos
const auto1 = new Auto('AD360SD', 'Fiat', 'Palio', 2020, motorAuto, ruedasAuto);
const moto1 = new Moto('A235GT', 'Yamaha', 'FZ', 2019, motorMoto, ruedasMoto);
const camion1 = new Camion('AF124TT', 'Mercedes', 'Actros', 2023, motorCamion, ruedasCamion);
const auto2 = new Auto('SDL385', 'Ford', 'Mondeo', 1990, motorAuto, ruedasAuto);
const moto2 = new Moto('A589TA', 'Zanela', 'Fire', 1996, motorMoto, ruedasMoto);
const camion2 = new Camion('AF258GH', 'VW', '17220', 2024, motorCamion, ruedasCamion);

// Crear registro automotor
const registro = new RegistroAutomotor();

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(moto2);
registro.agregarVehiculo(camion2);

// Mostrar vehículos por tipo
registro.mostrarVehiculosPorTipo('Auto');
registro.mostrarVehiculosPorTipo('Moto');
registro.mostrarVehiculosPorTipo('Camion');

//Mostrar todos los vehiculos del arreglo Vehiculo
registro.mostrarVehiculos();

// Modificar un vehículo
const autoModificado = new Auto('AD360SD', 'Fiat', 'Uno', 2021, motorAuto, ruedasAuto);
registro.modificarVehiculo(0, autoModificado);

// Eliminar un vehículo
registro.eliminarVehiculo(4);

// Consultar un vehículo por patente
registro.consultarVehiculo('SDL385');  // Buscar auto
registro.consultarVehiculo('A235GT');  // Buscar moto
registro.consultarVehiculo('A589TA');  // Buscar moto eliminada
registro.consultarVehiculo('AF258GH'); // Buscar camion