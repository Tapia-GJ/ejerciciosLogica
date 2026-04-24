function cuentaVocalesConsonantes(str) {
  const texto = str.toLowerCase();
  let vocalMax = 0;
  let consoMax = 0;
  const vocales = ["a", "e", "i", "o", "u"];
  const diccionario = {};
  for (let letra = 0; letra < texto.length; letra++) {
    if (!diccionario[texto[letra]]) {
      diccionario[texto[letra]] = 1;
    } else {
      diccionario[texto[letra]]++;
    }

    if (vocales.includes(texto[letra])) {
      if (vocalMax < diccionario[texto[letra]])
        vocalMax = diccionario[texto[letra]];
    } else {
      if (consoMax < diccionario[texto[letra]])
        consoMax = diccionario[texto[letra]];
    }
  }
  return vocalMax + consoMax;
}

console.log(cuentaVocalesConsonantes("hhdaaeee"));

// function decodeSantaPin(code) {
//   let codigo = "";
//   let num = 0;
//   let numAct = 0;
//   for (let i = 0; i < code.length; i++) {
//     if (i > 0 && code[i] === "]") {
//       codigo = `${codigo}${num}`;
//     }
//     if (!isNaN(code[i])) {
//       numAct = code[i];
//     }
//     if (code[i] === "+") {
//       if (numAct == 9) {
//         numAct = 0;
//       } else {
//         numAct++;
//       }
//     }
//     if (code[i] === "-") {
//       if (numAct == 0) {
//         numAct = 9;
//       } else {
//         numAct--;
//       }
//     }
//     if (code[i] === "<") {
//       numAct = num;
//     }
//     num = numAct;
//   }
//   if (codigo.length < 4) return null;
//   return codigo;
// }

// // console.log(decodeSantaPin("[1++][2-][3+][<]"));
// // console.log(decodeSantaPin("[9+][0-][4][<]"));
// console.log(decodeSantaPin("[1+][2-]"));
// console.log(decodeSantaPin("[1+++++++++][2--][3----][<]"));
