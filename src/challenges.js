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
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
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
  let maiorNum = -99;
  for (let index = 0; index < ahei.length; index++) {
    if (ahei[index] > maiorNum) {
      maiorNum = ahei[index];
    }
  }
  let contador = 0;
  for (let i = 0; i < ahei.length; i++) {
    if (ahei[i] == maiorNum) {
      contador++;
    }
  }
  return contador;
}

// Desafio 7 - Crie uma função de Caça ao Rato
// Implemente a função catAndMouse que verifica qual gato está mais perto do rato
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - Crie uma função FizzBuzz
// Implemente a função fizzBuzz que recebe um array de números e retorna um array de string de acordo com o resultado
function fizzBuzz(ahey) {
  let resultado = [];
  for (let index = 0; index < ahey.length; index++) {
    if (ahey[index] % 3 === 0 && ahey[index] % 5 === 0) {
      ahey[index] = 'fizzBuzz';
    } else if (ahey[index] % 3 === 0) {
      ahey[index] = 'fizz';
    } else if (ahey[index] % 5 === 0) {
      ahey[index] = 'buzz';
    } else {
      ahey[index] = 'bug!';
    }
  }
  return ahey;
}

// Desafio 9 - Crie uma função que Codifique e Decodifique
// Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.
function encode(vogais) {
  vogais = vogais.replace(/a/g, 1);
  vogais = vogais.replace(/e/g, 2);
  vogais = vogais.replace(/i/g, 3);
  vogais = vogais.replace(/o/g, 4);
  vogais = vogais.replace(/u/g, 5);
  return vogais;
}
function decode(numeros) {
  numeros = numeros.replace(/1/g, 'a');
  numeros = numeros.replace(/2/g, 'e');
  numeros = numeros.replace(/3/g, 'i');
  numeros = numeros.replace(/4/g, 'o');
  numeros = numeros.replace(/5/g, 'u');
  return numeros;
}

// Desafio 10 - Crie uma função de Lista de Tecnologias
// Implemente a função techList que recebe um array e uma string e retorna um array de objetos.
function techList(tecnologias, nome) {
  if (tecnologias.length == 0) {
    return 'Vazio!';
  }
  tecnologias.sort();
  let list = [];
  for (let index = 0; index < tecnologias.length; index++) {
    list.push({
      tech: tecnologias[index],
      name: nome,
    });
  }
  return list;
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
