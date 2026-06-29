// Contexto
// Eres un desarrollador en una empresa de recursos humanos. El sistema de nómina fue escrito por alguien con prisa y tiene una función que mezcla demasiadas responsabilidades: calcula el salario bruto, aplica bonificaciones por categoría, determina el impuesto progresivo y finalmente retorna el salario neto.

// Lo que debes hacer
// Refactoriza la función calculateMonthlySalary para que sea legible, mantenible y bien estructurada:

// Elimina los números mágicos — extrae constantes con nombres descriptivos en UPPER_SNAKE_CASE
// Elimina las variables de una sola letra — usa nombres que comuniquen intención
// Extrae funciones auxiliares — separa el cálculo del bruto, bono, impuesto y neto en funciones con responsabilidad única
// Mantén exactamente el mismo comportamiento: mismas entradas, mismas salidas
// Reglas de negocio
// Si las horas o la tarifa son inválidas (≤ 0), retorna -1
// Bonificación por categoría: "senior" → +20%, "mid" → +10%, "junior" → sin bono
// Impuesto progresivo sobre el total (bruto + bono):
// Si total > 5000 → 25%
// Si total > 2000 → 15%
// En otro caso → 8%
// Retorna el salario neto redondeado a 2 decimales

const BONIFICACION: Record<string, number> = {
  senior: 0.2,
  mid: 0.1,
  junior: 0,
};

const MAX_TAX = 0.25;
const MID_TAX = 0.15;
const MIN_TAX = 0.08;
const MAX_IMPORT_TAX = 5000;
const MID_IMPORT_TAX = 2000;

function calculateSalarioBruto(horas: number, tarifaPorHora: number): number {
  return horas * tarifaPorHora;
}

function calcularImpuestos(total: number): number {
  if (total > MAX_IMPORT_TAX) {
    return total * MAX_TAX;
  } else if (total > MID_IMPORT_TAX) {
    return total * MID_TAX;
  } else {
    return total * MIN_TAX;
  }
}

function calculateTotal(subtotal: number, impuestos: number) {
  return Math.round((subtotal - impuestos) * 100) / 100;
}

export function calculateMonthlySalary(
  horas: number,
  tarifaPorHora: number,
  categoria: string,
): number {
  if (horas <= 0) return -1;
  if (tarifaPorHora <= 0) return -1;

  // Calcular salario bruto multiplicando horas por tarifa
  const salarioBruto = calculateSalarioBruto(horas, tarifaPorHora);
  let bonificacion = salarioBruto * BONIFICACION[categoria];
  let subtotal = salarioBruto + bonificacion;
  let impuestos = calcularImpuestos(subtotal);
  const TOTAL = calculateTotal(subtotal, impuestos);
  return TOTAL;
}
