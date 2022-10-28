// Desafio 11 - Crie uma função de número de telefone
// Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.
function generatePhoneNumber(telemarketing) {
  if(telemarketing.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  let repetidos = 0;
  let numero = '(';
  for(let i = 0; i < telemarketing.length; i += 1){
    if(telemarketing[i] < 0 || telemarketing[i] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for(let j = 0; j < telemarketing.length; j += 1){
      if(telemarketing[i] === telemarketing[j]){
        repetidos += 1;
      }
    }
    if(repetidos >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    }
    repetidos = 0;
    if(i === 2){
      numero += ') ';
    }
    if(i === 7){
      numero += '-';
    }
    numero += telemarketing[i];
  }
  return numero;
}


// Desafio 12 - Crie uma função que teste a condição de existência de um triângulo
// Implemente a função triangleCheck que verifica se é possível formar um triângulo analisando o comprimento de três linhas.
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13 - Crie uma função de boas vindas ao Bar da Trybe!
// Implemente a função hydrateque recebe uma string e retorna a sugestão de quantos copos de água você deve beber.
function hydrate(istringue) {
  let copos = istringue.split(' ');
  let coposAgua = 0;

  console.log(copos);

  for (let i = 0; i < copos.length; i++) {
    if (/[0-9]/.test(copos[i])) {
      coposAgua += parseInt(copos[i]);
    }
  }

  if(coposAgua>1){
   return coposAgua + " copos de água";
  } else{
    return coposAgua + " copo de água";
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
