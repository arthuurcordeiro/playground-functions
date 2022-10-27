// Desafio 1 - rie uma função usando o operador &&
// Implemente a função compareTrue utilizando somente o operador &&
function compareTrue(tigre, lobo) {
  if (tigre == true && lobo == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 - rie uma função que calcula a área de um triângulo
// Implemente a função calcArea que retorna o cálculo da área total de um triângulo
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - Crie uma função que divida uma frase
// Implemente a função splitSentence que divide uma frase de acordo com a quantidade de palavras
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4 - Crie uma função que use concatenação de strings
// Implemente a função concatName que recebe um array de strings e retorna uma string com o último e o primeiro item
function concatName(arrei) {
  return arrei[arrei.length - 1] + ', ' + arrei[0];
}

// Desafio 5 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
// Implemente a função footballPoints que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates
function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates;
}

// Desafio 6 - Crie uma função que calcula o número de repetições do maior número
// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.
function highestCount(ahei) {
  let maiorNum = -99
  for (let index = 0; index < ahei.length; index++) {
    if (ahei[index] > maiorNum) {
      maiorNum = ahei[index]
    }
  }
  let contador = 0
  for (let i = 0; i < ahei.length; i ++) {
    if (ahei[i] == maiorNum) {
      contador ++
    }
  }
  return contador
}

highestCount([9, 3, 4, 13])
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
