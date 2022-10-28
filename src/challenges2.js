// Desafio 11 - Crie uma função de número de telefone
// Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.
function generatePhoneNumber(telefone) {

  
}

// Desafio 12 - Crie uma função que teste a condição de existência de um triângulo
// Implemente a função triangleCheck que verifica se é possível formar um triângulo analisando o comprimento de três linhas.
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true
  } else if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    return true
  } else {
    return false
  }
  
  }

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
