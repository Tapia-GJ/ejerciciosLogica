// Contexto

// Tienes una función que calcula la tarifa de un viaje en taxi,
// pero está llena de números mágicos,
// variables de una sola letra y lógica anidada difícil de leer.
// Tu tarea

// Refactoriza la función calculateTaxiFare para que:

//     Elimines los números mágicos — extrae constantes con nombres descriptivos en
// UPPER_SNAKE_CASE (ej: BASE_FARE, RATE_PER_KM, NIGHT_MULTIPLIER)
//     Renombres las variables — usa nombres que expresen su intención, no letras sueltas
//     Extraigas funciones auxiliares — separa la lógica de recargo nocturno,
// recargo por pasajeros extra, y tarifa mínima en funciones propias

// Reglas del negocio

//     La tarifa base es 2.50
//     La tarifa por kilómetro es 1.20
//     Horario nocturno (antes de las 6:00 o desde las 22:00):
// el recargo por kilómetro aumenta 50%
//     Más de 4 pasajeros: se suma 0.30 por cada pasajero adicional
//     La tarifa mínima siempre es 5.00

const TARIFA_BASE = 2.5;
const TARIFA_POR_KILOMETRO = 1.2;
const RECARGO_NOCTURNO = 1.5;
const RECARGO_PASAJEROS = 0.3;
const TARIFA_MINIMA = 5;

function calcularTarifaPorHorario(hora: number, kilometros: number): number {
  // Verificar si es horario nocturno
  if (hora < 6 || hora >= 22) {
    // Aplicar recargo nocturno al costo por kilómetro
    return TARIFA_BASE + kilometros * TARIFA_POR_KILOMETRO * RECARGO_NOCTURNO;
  } else {
    return TARIFA_BASE + kilometros * TARIFA_POR_KILOMETRO;
  }
}

function calcularTarifaPorPasajeros(
  tarifaActual: number,
  pasajeros: number,
): number {
  if (pasajeros > 4) return tarifaActual + (pasajeros - 4) * RECARGO_PASAJEROS;
  return tarifaActual;
}

function aplicarTarifaMinima(tarifaActual: number): number {
  if (tarifaActual < TARIFA_MINIMA) return 5.0;
  return tarifaActual;
}

export function calculateTaxiFare(
  kilometros: number,
  hora: number,
  pasajeros: number,
): number {
  let tarifa = 0;

  tarifa = calcularTarifaPorHorario(hora, kilometros);

  tarifa = calcularTarifaPorPasajeros(tarifa, pasajeros);
  // Aplicar tarifa mínima

  return aplicarTarifaMinima(tarifa);
}
