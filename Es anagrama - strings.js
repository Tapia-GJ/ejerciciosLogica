// Devuelve true si s y t son anagramas
// (mismas letras en distinto orden), false si no.

function isAnagram(firstWord, secondWord) {
  for (let i = 0; i < firstWord.length; i++) {
    if (!secondWord.includes(firstWord[i])) return false;
    // console.log("primera palabra", firstWord[i]);
    // console.log(secondWord.includes(firstWord[i]));
  }
  return true;
}

console.log(isAnagram("roma", "amor")); //→ true
console.log(isAnagram("hola", "adios")); //→ false
