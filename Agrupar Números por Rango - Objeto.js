// Agrupar Números por Rango
// Escribe una función agruparPorRango que reciba un array de números y un tamaño de rango (rangeSize).
// La función debe agrupar los números en un objeto donde las claves son strings con el formato "min-max"
// que representan cada rango, y los valores son arrays con los números que caen en ese rango.

// Cada rango cubre el intervalo [min, max) (cerrado por la izquierda, abierto por la derecha).
// El rango comienza desde 0 y avanza en incrementos de rangeSize.

// Restricciones
// rangeSize es un número entero positivo mayor a 0.
// Los números del array son enteros no negativos.
// El array puede estar vacío (devuelve {}).
// Mantén el orden de aparición de los números dentro de cada grupo.
// Solo incluye en el resultado los rangos que contienen al menos un número.
// No uses librerías externas.

function agruparPorRango(numbers, rangeSize) {
  if (!numbers) return {};
  const diccionario = {};
  let min = 0;
  let max = rangeSize;
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] >= max || numbers[i] < min) {
      if (numbers[i] >= max) {
        min += rangeSize;
        max += rangeSize;
      }
      if (numbers[i] < min) {
        min -= rangeSize;
        max -= rangeSize;
      }
    }
    if (!diccionario[`${min}-${max}`]) diccionario[`${min}-${max}`] = [];
    diccionario[`${min}-${max}`].push(numbers[i]);
  }
  return diccionario;
}

console.log(agruparPorRango([1, 5, 12, 3, 8, 15, 7, 60], 5));
//  { "0-5":[1, 3], "5-10": [5, 8, 7], "10-15": [12], "15-20": [15] }

console.log(agruparPorRango([0, 10, 20, 5], 10));
// { "0-10": [0, 5], "10-20": [10], "20-30": [20] }

console.log(agruparPorRango([4], 10));
// { "0-10": [4] }
