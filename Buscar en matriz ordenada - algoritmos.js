// Descripción

// Dada una matriz m x n donde cada fila está ordenada de izquierda a derecha y
// cada columna está ordenada de arriba a abajo,
// determina si un valor objetivo existe en la matriz.

const matrix = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17],
];

function searchMatrix(matrix, target) {
  if (!matrix[0]) return false;
  let f = 0;
  let c = matrix[f].length - 1;
  while (f < matrix.length && c >= 0) {
    if (matrix[f][c] === target) return true;
    matrix[f][c] > target ? c-- : f++;
  }
  return false;
}

console.log(searchMatrix(matrix, 5)); // true
console.log(searchMatrix(matrix, 20)); // false

// Notas

//     La solución eficiente tiene complejidad O(m + n).
//     Cada fila está ordenada de izquierda a derecha.
//     Cada columna está ordenada de arriba a abajo.
//     Si la matriz está vacía, retorna false.
