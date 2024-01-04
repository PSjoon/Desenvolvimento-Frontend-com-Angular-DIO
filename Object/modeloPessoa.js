class Pessoa {
  nome
  idade

  constructor(nome, idade) {
    this.nome = nome
    this.idaed = idade
  }

  descrever() {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}`)
  }
}

const vitor = new Pessoa("vitor", 25)
const renan = new Pessoa("renan", 30)

console.log(vitor)
console.log(renan)

vitor.descrever()
