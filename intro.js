// escreva -> console.log("Olá mundo");

// funcao -> function
// function olaMundo() {
//   console.log("Olá mundo");
// }

// olaMundo();

// undefined
// null
// string
// number
// boolean

var nome = "Francis";
let idade = 17;
const ativo = true;

// console.log("nome:", typeof nome);
// console.log("idade:", typeof idade);
// console.log("ativo:", typeof ativo);

// se -> if
// senao se -> else if
// senao -> else
// if (idade >= 18) {
//   console.log("É de maior");
// } else {
//   console.log("É de menor");
// }

// E -> &&
// OU -> ||
function tipoLetra(letra) {
  if (
    letra == "A" ||
    letra == "E" ||
    letra == "I" ||
    letra == "O" ||
    letra == "U" ||
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return "É uma vogal";
  } else {
    return "É uma consoante";
  }
  // if (["a", "e", "i", "o", "u"].includes(letra.toLowerCase())) {
  //   return "É uma vogal";
  // } else {
  //   return "É uma consoante";
  // }
}

// console.log(tipoLetra("a"));

// enquanto -> while
var repeticoes = 10;

while (repeticoes > 0) {
  // console.log(repeticoes);
  repeticoes = repeticoes - 1;
  // repeticoes -= 1;
  // repeticoes--;
}

// para -> for
for (var posicao = 1; posicao <= 10; posicao++) {
  // console.log(posicao);
}

// / - divisão
// + - adição
// - - subtração
// * - multiplicação
// % - resto

// console.log(2 % 2);
