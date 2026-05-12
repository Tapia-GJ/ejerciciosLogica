// Array de sumas de prefijos

// Dado un array de enteros nums, construye y
// devuelve un nuevo array prefix de la misma longitud donde cada elemento prefix[i]
// es la suma de todos los elementos desde el índice 0 hasta el índice i (inclusive).
// Ejemplos

function prefixSum(numbers: number[]): number[] {
  let anterior = 0;
  const suma = numbers.map((numero) => {
    numero += anterior;
    anterior = numero;
    return numero;
  });
  return suma;
}

prefixSum([1, 2, 3, 4]); // [1, 3, 6, 10]
prefixSum([5]); // [5]
prefixSum([3, -1, 2]); // [3, 2, 4]
prefixSum([]); // []

// Restricciones

//     0 <= nums.length <= 10^4
//     -10^4 <= nums[i] <= 10^4
//     Si el array está vacío, devuelve un array vacío.
