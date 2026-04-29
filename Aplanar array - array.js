// Descripción

// Dado un array de arrays de números,
// devuelve un solo array con todos los elementos.

function flatten(items) {
  const newarray = [];
  items.map((item) => {
    for (let i = 0; i < item.length; i++) {
      newarray.push(item[i]);
    }
  });
  return newarray;
}

console.log(flatten([[1, 2], [3, 4], [5]])); // → [1, 2, 3, 4, 5]
console.log(flatten([[]])); //→ []
