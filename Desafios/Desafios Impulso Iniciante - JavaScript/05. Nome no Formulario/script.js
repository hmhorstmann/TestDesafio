// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["Fulano de Tal"]
// const inputs = ["Pedro de Alcantara Francisco Antonio Joao Carlos Xavier de Paula Miguel Rafael Joaquim Jose Gonzaga Pascoal Cipriano Serafim"]


function gets() {
    return inputs.shift()
}

// -------------------------

let L = gets()

//TODO: Complete o código com uma possível solução para o problema.

L.length <= 80 ? console.log("YES") : console.log("NO") // syntaxe curta

// if (L.length <= 80) {
//   console.log("YES")
// } else {
//   console.log("NO")
// }