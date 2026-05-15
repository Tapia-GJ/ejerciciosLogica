// Contexto

// Tienes una función que calcula el precio final de un boleto de avión según la clase,
// la distancia, la cantidad de pasajeros y si llevan equipaje.
// El código funciona, pero está lleno de problemas: números mágicos,
// variables de una sola letra, lógica duplicada
// y todo mezclado en una sola función gigante.

// Tu tarea es refactorizarla aplicando el patrón Strategy (o polimorfismo),
// extrayendo constantes con nombres descriptivos y
// separando las responsabilidades en funciones auxiliares.
// Reglas de negocio

//     Si passengers <= 0 o distance < 100, retorna -1
//     Precio base por kilómetro según la clase:
//         "economy" → 0.10 por km por pasajero
//         "business" → 0.25 por km por pasajero
//         "first" → 0.45 por km por pasajero
//     Equipaje (hasLuggage = true):
//         "economy" cobra 30 por pasajero
//         "business" y "first" incluyen el equipaje (sin cargo adicional)
//     Si hay 5 o más pasajeros, aplica un 10% de descuento sobre el total

// Firma de la función

// function calculateFlightTicketPrice(
//   passengers: number,
//   flightClass: string,
//   distance: number,
//   hasLuggage: boolean
// ): number

// Ejemplos

type CalculatePriceStrategy = (
  passengers: number,
  distance: number,
  luggage: boolean,
) => number;

const ECONOMY_PRICE = 0.1;
const ECONOMY_LUGGAEG = 30;
const BUSINESS_PRICE = 0.25;
const FIRST_PRICE = 0.45;
const DISCOUNT = 0.1;
const MIN_PASSENGERS = 0;
const MIN_DISTANCE = 100;
const MIN_PASSENGERS_DISCOUNT = 5;
const NOT_VALID = -1;
const ROUND = 100;
const CLASS_STRATEGIES: Record<string, CalculatePriceStrategy> = {
  economy: economyPrice,
  business: businessPrice,
  first: firstPrice,
};

function economyPrice(
  passengers: number,
  distance: number,
  luggage: boolean,
): number {
  let price = distance * ECONOMY_PRICE * passengers;
  return luggage ? price + ECONOMY_LUGGAEG * passengers : price;
}
function businessPrice(
  passengers: number,
  distance: number,
  luggage: boolean,
): number {
  return distance * BUSINESS_PRICE * passengers;
}
function firstPrice(
  passengers: number,
  distance: number,
  luggage: boolean,
): number {
  return distance * FIRST_PRICE * passengers;
}

export function calculateFlightTicketPrice(
  passengers: number,
  class_flight: string,
  distance: number,
  luggage: boolean,
): number {
  if (passengers <= MIN_PASSENGERS) return NOT_VALID;
  if (distance < MIN_DISTANCE) return NOT_VALID;
  const classStrategy = CLASS_STRATEGIES[class_flight];
  let subtotal = classStrategy(passengers, distance, luggage);
  const total =
    passengers >= MIN_PASSENGERS_DISCOUNT
      ? subtotal - subtotal * DISCOUNT
      : subtotal;
  return Math.round(total * ROUND) / ROUND;
}

// 2 pasajeros, economy, 500 km, sin equipaje
calculateFlightTicketPrice(2, "economy", 500, false); // → 100

// 2 pasajeros, economy, 500 km, con equipaje
calculateFlightTicketPrice(2, "economy", 500, true); // → 160

// 1 pasajero, business, 800 km, sin equipaje
calculateFlightTicketPrice(1, "business", 800, false); // → 200

// 5 pasajeros, economy, 400 km, sin equipaje (descuento grupal)
calculateFlightTicketPrice(5, "economy", 400, false); // → 180

// Sin números mágicos

// Sin variables de una sola letra

// Declara constantes en UPPER_SNAKE_CASE

// Extrae al menos una función auxiliar

// Elimina la cadena if-else para tipos de clase

// Máximo 40 líneas en la función principal
