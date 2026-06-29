function countVowels(text: string): number {
  const diccionario = ["a", "e", "i", "o", "u"];
  return text.split("").filter((letra) => diccionario.includes(letra)).length;
}

// No modificar: necesario para evaluar el resultado.
export { countVowels };
