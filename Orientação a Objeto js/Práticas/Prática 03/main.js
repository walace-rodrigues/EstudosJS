class Carro {
  constructor(nome, marca, ano) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
  }

  gerarHtml() {
    const carroHtml = document.createElement('div');
    carroHtml.innerHTML = `
      <p>Nome: ${this.nome}</p>
      <p>Marca: ${this.marca}</p>
      <p>Ano: ${this.ano}</p>
    `;
    return carroHtml;
  }
}

// Exemplo de uso
const carros = [
  new Carro('Fusca', 'Volkswagen', 1970),
  new Carro('Gol', 'Volkswagen', 2020),
  new Carro('Civic', 'Honda', 2015)
];

const divCarros = document.createElement('div');
carros.forEach(carro => {
  const divCarro = carro.gerarHtml();
  divCarros.appendChild(divCarro);
});

document.body.appendChild(divCarros);
