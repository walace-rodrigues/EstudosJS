class Carro {
  constructor(nome,cor){
    
    this.nome = nome
    this.cor = cor

    console.log(`Olá, sou o carro ${this.nome} da cor ${this.cor}`)
  }
}

let carro1 = new Carro('Etios', 'verde')
let carro2 = new Carro('Uno', 'cinza')
let carro3 = new Carro('Porsche', 'rosa')

