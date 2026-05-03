// Refactoriza: costo de renta de auto

// Tienes una función que calcula el costo total de rentar un auto.
// El código funciona, pero está lleno de problemas:

//     Números mágicos dispersos por toda la función (tarifas, descuentos)
//     Variables de una sola letra que no comunican intención
//     Condicionales anidadas que dificultan seguir el flujo
//     Una sola función gigante que hace demasiadas cosas

// Tu tarea

// Refactoriza calculateCarRentalCost para que:

//     Extraiga las tarifas y porcentajes como constantes con nombres descriptivos
// (UPPER_SNAKE_CASE)
//     Use nombres de variables descriptivos (sin variables de una letra)
//     Extraiga al menos una función auxiliar (por ejemplo,
// para obtener la tarifa base según el tipo de auto)
//     Mantenga exactamente el mismo comportamiento

// Reglas de negocio

//     Tipos de auto: economy (tarifa base $35/día), standard ($55/día),
// premium ($90/día)
//     Tipo inválido o días ≤ 0 → retorna -1
//     Renta de 7–13 días → descuento del 10%
//     Renta de 14+ días → descuento del 20%
//     Seguro opcional: +$15 por día adicionales al subtotal con descuento

function getBaseRateByCarType(type: string, days: number): number {
  const RATE_ECONOMY = 35;
  const RATE_STANDARD = 55;
  const RATE_PREMIUM = 90;
  switch (type) {
    case "economy":
      return RATE_ECONOMY * days;
      break;
    case "standard":
      return RATE_STANDARD * days;
      break;
    case "premium":
      return RATE_PREMIUM * days;
      break;
    default:
      return -1;
  }
}

function getDiscount(days: number, subTotal: number): number {
  if (days >= 14) {
    return subTotal * 0.2;
  } else if (days >= 7) return subTotal * 0.1;
  return 0;
}

export function calculateCarRentalCost(
  days: number,
  carType: string,
  hasInsurance: boolean,
): number {
  const INSURANCE_RATE = 15;
  if (days <= 0) return -1;

  let subTotal = getBaseRateByCarType(carType, days);

  if (subTotal < 0) return -1;

  subTotal = subTotal - getDiscount(days, subTotal);

  return hasInsurance ? subTotal + INSURANCE_RATE * days : subTotal;
}

console.log(calculateCarRentalCost(3, "luxury", false)); //-1
console.log(calculateCarRentalCost(7, "standard", false)); //346.5
