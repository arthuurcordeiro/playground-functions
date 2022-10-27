// Desafio 1 - rie uma função usando o operador &&
// Implemente a função compareTrue utilizando somente o operador &&
function compareTrue(tigre, lobo) {
    if (tigre == true && lobo == true){
      return true;
    } else {
      return false
    }
  }

// Desafio 2 - rie uma função que calcula a área de um triângulo
// Implemente a função calcArea que retorna o cálculo da área total de um triângulo
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3 - Crie uma função que divida uma frase
// Implemente a função splitSentence que divide uma frase de acordo com a quantidade de palavras
function splitSentence(frase) {
  return frase.split(' ')  
}

// Desafio 4 - Crie uma função que use concatenação de strings
// Implemente a função concatName que recebe um array de strings e retorna uma string com o último e o primeiro item
function concatName(arrei) {
  return arrei[arrei.length -1] + ", " + arrei[0]  
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
