class Carro {
  constructor(nome, marca, ano, ligado = false) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
    this.ligado = ligado;
    this.km = 0
  }

  info (){
    console.log('Marca.......:' + this.marca)
    console.log('Nome........:' + this.nome)
    console.log('Ano.........:' + this.ano)
    console.log('Ligado......:' + (this.ligado ? 'Sim' : 'Não'))
    console.log('KM..........:' + this.km)
    console.log('--------------------------')
  }

  liga () {
    this.ligado = true
  }
  desliga () {
    this.ligado = false
  }
  ligaDesliga () {

    if (this.ligado == false){
      this.ligado = true
    }
    else {
      this.ligado = false
    }
  }
}

const carros = [
  new Carro('Etios', 'Toyota', 2020),
  new Carro('Uno', 'Fiat', 2003),
  new Carro('Honda', 'HRV', 2024)
]

carros.forEach(item => {
  if(item.ano > 2010){
    console.log(item.marca, item.nome, item.ano)
  }
})
