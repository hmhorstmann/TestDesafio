// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = [
	"10",
	"10 10 10 10 15 18 20 15 15 11",
	"10",
	"1 5 2 9 5 5 8 4 4 3",
	"10",
	"19 9 1 4 5 8 6 11 9 7"
];

function gets() {
	return inputs.shift();
}

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
//TODO: Complete os espaços em branco com uma possível resolução para o problema.
for (let j = 0; j < 3; j++) {
	let number = parseInt(gets()); // número de testes, tartarugas do grupo
	let velocity = gets().split(" "); // velocidade da tartaruga
	let max = 0; //
	let level = 0; // level (1, 2 ou 3)

	for (i = 0; i < number; i++) {
		if (max < parseInt(velocity[i])) {
			max = parseInt(velocity[i]);
		}
	}

	if (max < 10) {
		level = 1;
	} else if (max >= 10 && max < 20) {
		level = 2;
	} else {
		level = 3;
	}
	console.log(level);
}
