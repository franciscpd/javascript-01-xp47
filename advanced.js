const vogais = ["a", "e", "a", "i", "o", "u"];

vogais.forEach(function (vogal) {
  // console.log(vogal);
});

const vogaisCaixaAlta = vogais.map(function (vogal) {
  return vogal.toUpperCase();
});

console.log(vogais.find((vogal) => vogal == "a"));
console.log(vogais.filter((vogal) => vogal == "a"));

// for (let i = 0; i < vogais.length; i++) {
//   console.log(vogais[i]);
// }
// X - const vogaisENumeros = ["a", "e", "i", "o", "u", 1, 2, 3, 4, 5];

// const pessoa = {
//   nome: "Francis",
//   idade: 33,
//   celular: "",
//   casado: true,
// };

const receita_pipoca = {
  nome: "Receita pipoca",
  imagem: "",
  video: "",
  ingredientes: ["3 colheres de pipoca", "sal a gosto"],
  mode_de_preparo: "Aqueça a panela .....",
  serve: "",
  tempo_de_preparo: 30,
};

const receitas = [];

receitas.push(receita_pipoca);

console.log(receitas);
