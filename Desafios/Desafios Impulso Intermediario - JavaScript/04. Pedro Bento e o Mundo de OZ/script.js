// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["((","))","((","))","("]

function gets() {
    return inputs.shift()
}

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
//TODO: Complete os espaços em branco com uma possível solução para o problema.

const array = [];
const isUnique = [];
let count = 0;

do {
  const value = gets();
  if (value == undefined) { // na plataforma DIO, substitua "undefined" por "''"
  // if (value == '') {
    break;
  } else {
    array.push(value);
  }
} while (true);

for (item of array) {
  if (!isUnique.includes(item)) isUnique.push(item);
}

const result = isUnique.length;

console.log(result);