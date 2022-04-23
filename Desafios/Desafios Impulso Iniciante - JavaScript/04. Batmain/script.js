// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["1","Pistoleiro"]
// const inputs = [
// 	"5",
// 	"Batmain",
// 	"Coderinga",
// 	"Pìstoleiro",
// 	"Charadiz",
// 	"Ourtra Coisa"
// ]

function gets() {
    return inputs.shift()
}

// -------------------------

let T = parseInt(gets());

for (let i = 0; i < T; i++) {
	//complete o código aqui
	const input = gets();
	typeof input === "string" ? console.log("Y") : console.log("N"); // syntaxe curta

	// 	if (typeof input === 'string') {
	// 	    console.log('Y')
	// 	} else {
	// 	    console.log('N')
	// 	}
}
