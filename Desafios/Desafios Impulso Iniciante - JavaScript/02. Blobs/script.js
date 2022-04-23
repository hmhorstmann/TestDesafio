// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

const inputs = ["3",
    "40.0","200.0","300.0"
]

function gets() {
    return inputs.shift()
}

// -------------------------

let n = parseInt(gets());

//implemente sua solução nos espaços em branco

while (n >=  1  && n <=  1000  ) {
  let c = parseFloat(gets());
  
let dias =   0  ;
  while ( c >  1  && c <=  1000  ) {
    c = c / 2.0;
    dias++;
  }
  n--;
  console.log(`${dias}  dias`);
}