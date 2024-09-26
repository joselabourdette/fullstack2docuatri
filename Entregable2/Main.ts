import { Auto, Motor, Rueda } from './Auto';
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
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
registro.agregarAuto(auto2);
registro.agregarMoto(moto2);
registro.agregarCamion(camion2);

// Mostrar todos los vehiculos
registro.mostrarAutos()
registro.mostrarMotos()
registro.mostrarCamiones()

// Modificar un auto
let autoModificado = new Auto('AD360SD', 'Fiat', 'Uno', 2021, motorAuto, ruedasAuto);
registro.modificarAuto(0, autoModificado);

// Modificar una moto
let motoModificada = new Moto('A589TA', 'Zanela', 'Fire', 2000, motorMoto, ruedasMoto);
registro.modificarMoto(1, motoModificada);

// Modificar un camion
let camionModificado = new Camion('FF258GH', 'VW', '17220', 2024, motorCamion, ruedasCamion);
registro.modificarCamion(1, camionModificado);

// Para ver si las modificaciones fueron realizadas
registro.mostrarAutos()
registro.mostrarMotos()
registro.mostrarCamiones()

// Eliminar un auto
registro.eliminarAuto(0);

// Eliminar una moto
registro.eliminarMoto(1);

// Eliminar un camion
registro.eliminarCamion(2);  // Indice incorrecto para ver si funca la validacion

// Consulta por patente
registro.consultarVehiculo('SDL385');  // Busca auto
registro.consultarVehiculo('A589TA');  // Patente inventada
registro.consultarVehiculo('A235GT');  // Busca moto
registro.consultarVehiculo('FF258GH'); // Busca camion