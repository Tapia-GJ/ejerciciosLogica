// Agrupar por longitud
// Dado un array de strings, retorna un objeto donde cada clave
// es la longitud de las palabras y el valor es un array con todas las palabras de esa longitud,
// en el mismo orden en que aparecen en el input.

// Notas
// Las claves del objeto deben ser números (la longitud).
// Si el array está vacío, retorna un objeto vacío {}.
// Mantén el orden de aparición dentro de cada grupo.

function groupByLength(words) {
  if (!words) return {};
  const diccionario = {};
  words.map((word) => {
    let key = word.length;
    if (!diccionario[key]) diccionario[key] = [];
    diccionario[key].push(word);
  });
  return diccionario;
}

console.log(groupByLength(["sol", "mar", "luna", "rio", "nube"]));
// { 3: ["sol", "mar", "rio"], 4: ["luna", "nube"] }

console.log(groupByLength(["a", "bb", "ccc", "dd"]));
// { 1: ["a"], 2: ["bb", "dd"], 3: ["ccc"] }

console.log(groupByLength([]));
// {}
