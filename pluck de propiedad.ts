// Pluck de propiedad

// Dado un array de objetos y el nombre de una clave,
// devuelve un array con los valores de esa clave extraídos de cada objeto.

// Esta operación se conoce como "pluck" y es muy común en manipulación de datos.
// Ejemplos
function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((item) => item[key]);
}

console.log(
  pluck(
    [
      { name: "Ana", age: 25 },
      { name: "Luis", age: 30 },
    ],
    "name",
  ),
);
// ["Ana", "Luis"]

console.log(
  pluck(
    [
      { name: "Ana", age: 25 },
      { name: "Luis", age: 30 },
    ],
    "age",
  ),
);
// [25, 30]

console.log(pluck([], "name"));
// []

console.log(pluck([{ x: 1 }, { x: 2 }, { x: 3 }], "x"));
// [1, 2, 3]
