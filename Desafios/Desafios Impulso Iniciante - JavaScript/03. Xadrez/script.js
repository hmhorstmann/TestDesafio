// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["6","9"]
// const inputs = ["8","8"]
// const inputs = ["5","91"]

function gets() {
    return inputs.shift()
}

// -------------------------

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

const l = parseInt(gets());
const c = parseInt(gets());

//Complete os espaços em branco com uma possível solução para o problema

// ímpar % 2 => 1
// par   % 2 => 0
// porém, 1 deve ser branco... Sendo assim, se a soma de l + c for par, casa é branca
console.log((1 + l + c) % 2); //resposta curta

// if ((l + c) % 2) { // true se for ímpar
//     console.log(0)
// } else {
//     console.log(1)
// }