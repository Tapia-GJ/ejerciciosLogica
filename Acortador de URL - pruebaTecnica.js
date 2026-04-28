// Acortador de URL
// Este ejercicio fue preguntado por Microsoft.

// Implementa un acortador de URLs con las siguientes operaciones:

// "shorten": recibe una URL completa y devuelve un código alfanumérico de 6 caracteres.
// Si la misma URL se acorta dos veces, debe devolver el mismo código.
// "restore": recibe un código corto y devuelve la URL original.
// Si el código no existe, devuelve una cadena vacía "".
// Se te entrega un array de operaciones ops y un array de URLs/códigos urls.
// Devuelve un array con el resultado de cada operación en orden.

// El acortador debe asignar códigos de forma determinista usando un contador interno en base 62 (a-z, A-Z, 0-9),
// empezando desde "aaaaaa".

function urlShortener(ops, urls) {
  const diccionarioURL = {};
  let contador = 0;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "shorten") {
      if (!urls[i]) {
      }
    }
  }
  return [];
}

console.log(
  urlShortener(
    ["shorten", "restore", "restore"],
    ["https://www.google.com", "aaaaaa", "zzzzzz"],
  ),
);
// ["aaaaaa", "https://www.google.com", ""]

console.log(
  urlShortener(
    ["shorten", "shorten", "restore"],
    ["https://foo.com", "https://foo.com", "aaaaaa"],
  ),
);
// ["aaaaaa", "aaaaaa", "https://foo.com"]
// Notas
// Los códigos se asignan con un contador en base 62: el primer URL único obtiene "aaaaaa", el segundo "aaaaab", etc.
// El alfabeto base-62 es: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 (índice 0 = 'a').
// Si la misma URL se acorta más de una vez, devuelve el mismo código sin incrementar el contador.
