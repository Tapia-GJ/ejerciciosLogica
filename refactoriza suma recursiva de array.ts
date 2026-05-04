// Refactoriza: Suma Recursiva de Array

// El siguiente código funciona, pero usa var, un bucle for imperativo y
// estilo anticuado.
// Tu tarea es refactorizarlo para resolverlo de forma recursiva —
// sin usar bucles ni métodos iterativos de arrays.
// ¿Qué debes hacer?

//     Elimina el uso de var — usa const o let solo cuando sea necesario.
//     Elimina los bucles imperativos (for, while, do...while).
//     No uses métodos de array como .reduce(), .forEach(), .map() o .filter().
//     Implementa la suma usando recursividad: la función debe llamarse a sí misma.
//     Mantén el mismo nombre de función y los mismos resultados.

function recursiveArraySum(items: number[]): number {
  if (!items.length) return 0;
  return items[0] + recursiveArraySum(items.slice(1));
}

console.log(recursiveArraySum([1, 2, 3, 4])); // 10
console.log(recursiveArraySum([])); // 0
console.log(recursiveArraySum([5])); // 5
console.log(recursiveArraySum([-1, 1, -1, 1])); // 0

// Pista

// Una función recursiva necesita un caso base (cuando el array está vacío) y un caso
// recursivo (procesar el primer elemento y llamarse con el resto).
