// Dado un string en formato camelCase, conviértelo a snake_case
// (palabras separadas por guión bajo y en minúsculas).
// Ejemplo

function camelToSnake(word: string): string {
  let camelcase = "";
  let inicioSubstring = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      camelcase =
        camelcase + word.substring(inicioSubstring, i).toLowerCase() + "_";
      inicioSubstring = i;
    }
  }
  camelcase =
    camelcase + word.substring(inicioSubstring, word.length).toLowerCase();
  return camelcase;
}

console.log(camelToSnake("camelCase")); //→ "camel_case"
console.log(camelToSnake("myVariableName")); // → "my_variable_name"
console.log(camelToSnake("firstName")); // → "first_name"
console.log(camelToSnake("hola")); // → "hola"
