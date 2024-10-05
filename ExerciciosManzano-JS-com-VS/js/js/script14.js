const pessoa ={primeiroNome:"Livea", promeiroSobrenome: "Brito", ultimoNome: "da Silva", idade: 20}
let dados = " "

for (const x in pessoa) {
    dados += pessoa[x] + " "
}

console.log(dados)

