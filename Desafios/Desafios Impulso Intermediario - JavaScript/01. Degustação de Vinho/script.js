// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["1", "1 2 3 2 1"];
// const inputs = ["3", "4 1 1 2 1"]

function gets() {
	return inputs.shift();
}

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let opcaoCorreta = gets();
let chutes = gets().split(" ");

//TODO: Complete o código com uma possível solução para o problema.
let acertos = 0;

for (let chute of chutes)
	if (chute == opcaoCorreta) {
		acertos++;
	}
console.log(acertos);