// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["3",
    "3","100 80 90",
    "4", "100 120 30 50",
    "4", "100 90 30 25"
]

function gets() {
    return inputs.shift()
}

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let N = parseInt(gets());
let clientes = [];

//implemente aqui o seu código
  
let NumeroDeTestes = N

for(let i = NumeroDeTestes; i > 0; i--) {
    const NumeroDeClientes = parseInt(gets())
    clientes = gets().split(' ')
    console.log(comparaMudancas(clientes, ordenaArray(clientes, NumeroDeClientes)))
}

function ordenaArray(arr) { 
    const newArr = [...arr] //copia de array sem referencia
    
        return newArr.sort((a,b) => b-a) // retorna array reordenado
}

function comparaMudancas(arr1, arr2) { // compara 2 arrays, e retorna qnts posições são iguais
    let noChanges = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            noChanges += 1
        }
    }
    return noChanges
}

// ----------------------------------------------------------


// // a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// let N = parseInt(gets());
// let clientes = [];

// //implemente aqui o seu código
  
// let NumeroDeTestes = N

// for(let i = NumeroDeTestes; i > 0; i--) {
//     const NumeroDeClientes = parseInt(gets())
//     clientes = gets().split(' ')
//     console.log(comparaMudancas(clientes, ordenaArray(clientes, NumeroDeClientes)))
// }

// function ordenaArray(arr, arrLength) { 
//     const newArr = [...arr] //copia de array sem referencia
//     if (arrLength >= 2) {
//         for (let i = 0; i < arrLength-1; i++) {
//             if (newArr[i] - newArr[i+1] >= 0) {
//             } else {
//                 const first = newArr[i]
//                 newArr[i] = newArr[i+1]
//                 newArr[i+1] = first
//             }
//         }
//         ordenaArray(newArr, arrLength-1) //chamada recursiva
//     } 
//     return newArr // retorna array reordenado
// }

// function comparaMudancas(arr1, arr2) { // compara 2 arrays, e retorna qnts posições são iguais
//     let noChanges = 0
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === arr2[i]) {
//             noChanges += 1
//         }
//     }
//     return noChanges
// }