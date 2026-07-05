// Adaptado de Daily Coding Problem.

// Dado un array de enteros ordenado ascendentemente que ha sido rotado en algún punto desconocido, y un valor objetivo target, devuelve el índice del objetivo en el array. Si no se encuentra, devuelve -1.

// Puedes asumir que no hay valores duplicados en el array.

function searchRotatedArray(nums: number[], target: number): number {
  return nums.findIndex((item) => item === target);
}

// No modificar: necesario para evaluar el resultado.
export { searchRotatedArray };

console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotatedArray([1], 0));
