// Agrupar por propiedad

// Dado un array de objetos y el nombre de una propiedad (clave),
// devuelve un nuevo objeto donde cada clave es un valor distinto de esa propiedad,
// y cada valor es un array con los objetos que comparten ese valor.

const people = [
  { name: "Ana", city: "Madrid" },
  { name: "Luis", city: "Lima" },
  { name: "Carlos", city: "Madrid" },
];

function groupBy(array, key) {
  const diccionario = {};
  array.map((object) => {
    console.log(object[key]);
    if (!diccionario[object[key]]) diccionario[object[key]] = [];
    diccionario[object[key]].push(object);
  });
  return diccionario;
}

console.log(groupBy(people, "city"));
// {
//   "Madrid": [{ name: "Ana", city: "Madrid" }, { name: "Carlos", city: "Madrid" }],
//   "Lima": [{ name: "Luis", city: "Lima" }]
// }

// Notas

//     Si el array esta vacio, devuelve un objeto vacio {}.
//     Todos los objetos tendran la propiedad indicada.
//     El valor de la propiedad siempre sera un string o numero.
