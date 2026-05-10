// Contexto
// Una empresa de servicios públicos calcula la factura de electricidad de sus clientes
// según el tipo de contrato y el consumo mensual en kilowatts-hora (kWh).

// Tu tarea
// Refactoriza la función calculateElectricityBill para que sea limpia, legible y mantenible.
// El comportamiento debe ser idéntico al original.

// Reglas de negocio
// Residencial: primer tramo hasta 100 kWh a $0.10/kWh, de 101 a 300 kWh a $0.15/kWh, más de 300 kWh a $0.20/kWh
// Comercial: tarifa plana de $0.18/kWh, con 10% de descuento si el consumo supera 500 kWh
// Industrial: tarifa plana de $0.12/kWh, con 15% de descuento si el consumo supera 1000 kWh, más un cargo fijo de $50
// En todos los casos, el monto mínimo a cobrar es $5
// Problemas a corregir
// Elimina los números mágicos y extrae constantes con nombre descriptivo en UPPER_SNAKE_CASE
// Renombra las variables de una sola letra con nombres que expresen su propósito
// Extrae funciones auxiliares que encapsulen la lógica por tipo de cliente
// Aplica el principio de responsabilidad única: cada función debe hacer una sola cosa

const RESIDENTIAL_MINIMUM_CHARGE = 0.1;
const RESIDENTIAL_AVARAGE_CHARGE = 0.15;
const RESIDENTIAL_MAXIMUM_CHARGE = 0.2;
const RESIDENTIAL_MINIMUM_USAGE = 100;
const RESIDENTIAL_MEDIUM_USAGE = 300;

const COMMERCIAL_FLAT_RATE = 0.18;
const COMMERCIAL_DISCOUNT = 0.1;
const COMMERCIAL_MAXIMUM_USAGE = 500;

const INDUSTRIAL_FLAT_RATE = 0.12;
const INDUSTRIAL_DISCOUNT = 0.15;
const INDUSTRIAL_MAXIMUM_USAGE = 1000;
const INDUSTRIAL_FIXED_CHARGE = 50;

function calculateResidentialCoste(consumption: number): number {
  let calculateConsumption = 0;
  if (consumption <= RESIDENTIAL_MINIMUM_USAGE) {
    calculateConsumption = consumption * RESIDENTIAL_MINIMUM_CHARGE;
  } else if (consumption <= RESIDENTIAL_MEDIUM_USAGE) {
    calculateConsumption =
      RESIDENTIAL_MINIMUM_USAGE * RESIDENTIAL_MINIMUM_CHARGE +
      (consumption - RESIDENTIAL_MINIMUM_USAGE) * RESIDENTIAL_AVARAGE_CHARGE;
  } else {
    calculateConsumption =
      RESIDENTIAL_MINIMUM_USAGE * RESIDENTIAL_MINIMUM_CHARGE +
      (RESIDENTIAL_MEDIUM_USAGE - RESIDENTIAL_MINIMUM_USAGE) *
        RESIDENTIAL_AVARAGE_CHARGE +
      (consumption - RESIDENTIAL_MEDIUM_USAGE) * RESIDENTIAL_MAXIMUM_CHARGE;
  }
  return calculateConsumption;
}

function calculateCommercialCoste(consumption: number): number {
  let calculateConsumption = 0;
  if (consumption > COMMERCIAL_MAXIMUM_USAGE) {
    calculateConsumption =
      consumption * COMMERCIAL_FLAT_RATE -
      consumption * COMMERCIAL_FLAT_RATE * COMMERCIAL_DISCOUNT;
  } else {
    calculateConsumption = consumption * COMMERCIAL_FLAT_RATE;
  }
  return calculateConsumption;
}

function calculateIndustrialCoste(consumption: number): number {
  let calculateConsumption = 0;
  if (consumption > INDUSTRIAL_MAXIMUM_USAGE) {
    calculateConsumption =
      consumption * INDUSTRIAL_FLAT_RATE -
      consumption * INDUSTRIAL_FLAT_RATE * INDUSTRIAL_DISCOUNT +
      INDUSTRIAL_FIXED_CHARGE;
  } else {
    calculateConsumption =
      consumption * INDUSTRIAL_FLAT_RATE + INDUSTRIAL_FIXED_CHARGE;
  }
  return calculateConsumption;
}

function calculateMinimumCharge(electricityBill: number): number {
  if (electricityBill < 5) return (electricityBill = 5);
  return electricityBill;
}

export function calculateElectricityBill(
  montlyConsumption: number,
  typeOfClient: string,
): number {
  let electricityBill = 0;

  switch (typeOfClient) {
    case "residential":
      electricityBill = calculateResidentialCoste(montlyConsumption);
      break;

    case "commercial":
      electricityBill = calculateCommercialCoste(montlyConsumption);
      break;

    case "industrial":
      electricityBill = calculateIndustrialCoste(montlyConsumption);
      break;
  }
  return calculateMinimumCharge(electricityBill);
}

console.log(calculateElectricityBill(400, "residential")); //(esperado: 60)
console.log(calculateElectricityBill(600, "commercial")); //97.2
console.log(calculateElectricityBill(1200, "industrial")); //172.4
