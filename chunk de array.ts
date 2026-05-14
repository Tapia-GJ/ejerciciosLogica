// Chunk de array

// Dado un array y un tamaño size, divide el array en
// subarrays de exactamente size elementos cada uno.
// El último subarray puede tener menos elementos
// si el array no es divisible exactamente por size.
// Ejemplos

function chunkArray(nums: number[], size: number) {
  let chunk: number[][] = [];
  let posIni = 0;
  for (let i = 0; i < nums.length / size; i++) {
    chunk.push(nums.slice(posIni, posIni + size));
    posIni += size;
  }
  console.log(chunk);
}

chunkArray([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunkArray([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
chunkArray([1, 2, 3], 1); // [[1], [2], [3]]
chunkArray([1, 2, 3], 5); // [[1, 2, 3]]
chunkArray([], 3); // []

// Notas

//     Si el array está vacío, devuelve [].
//     Si size es mayor que la longitud del array,
// devuelve un único subarray con todos los elementos.
//     El orden de los elementos debe mantenerse.
