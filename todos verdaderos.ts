// Dado un array de booleanos, devuelve true si todos los elementos son true.
// Un array vacío devuelve true.
// Ejemplo

function allTrue(array: boolean[]) {
  return !array.includes(false);
}

console.log(allTrue([true, true, true])); //→ true
console.log(allTrue([true, false, true])); //→ false
console.log(allTrue([])); //→ true
