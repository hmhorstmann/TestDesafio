// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["500", "35.0"];
// const inputs = ["2254", "124.4"]
// const inputs = ["4554", "464.6"]

function gets() {
	return inputs.shift();
}

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let x = parseInt(gets());
let y = parseFloat(gets());

// TODO Realize o cálculo do consumo médio do automóvel.
const consumoMedio = x / y;

console.log(`${consumoMedio.toFixed(3)} km/L`);