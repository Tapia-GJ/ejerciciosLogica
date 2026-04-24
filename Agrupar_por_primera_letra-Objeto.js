// Agrupar por primera letra
// Dada una lista de palabras, devuelve un objeto donde cada clave es una letra del
// abecedario y su valor es un array con todas las palabras que comienzan con esa letra.
// Las claves deben ser letras minúsculas.
// Solo incluir las letras que tengan al menos una palabra.
// Las palabras dentro de cada grupo deben aparecer en el mismo orden en que aparecen en el array original.

// groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"])
// → { a: ["apple", "avocado"], b: ["banana", "blueberry"], c: ["cherry"] }

function groupByFirstLetter(words) {
  const diccionario = {};
  for (let i = 0; i < words.length; i++) {
    if (!diccionario[words[i][0].toLowerCase()]) {
      diccionario[words[i][0].toLowerCase()] = [];
      diccionario[words[i][0].toLowerCase()].push(words[i]);
    } else {
      diccionario[words[i][0].toLowerCase()].push(words[i]);
    }
  }
  return diccionario;
}

console.log(
  // groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]),
  groupByFirstLetter(["Zoro", "ZOta", "z", "blueberry", "cherry"]),
);
