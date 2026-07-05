// Contar elementos en rango
// Dada una lista de números y dos valores min y max, devuelve la cantidad de elementos que se encuentran dentro del rango inclusivo [min, max].

export function contarEnRango(
  numbers: number[],
  min: number,
  max: number,
): number {
  if (numbers.length < 1) return 0;
  return numbers.reduce(
    (acc, item) => (acc += item >= min && item <= max ? 1 : 0),
    0,
  );
}

// Ejemplos
console.log(contarEnRango([1, 5, 3, 8, 2, 7], 2, 6)); // 3  → (5, 3, 2)
console.log(contarEnRango([10, 20, 30], 15, 25)); // 1  → (20)
console.log(contarEnRango([], 1, 10)); // 0
// Notas
// El rango es inclusivo en ambos extremos.3
// Si el array está vacío, devuelve 0.
// Puede haber números negativos.
