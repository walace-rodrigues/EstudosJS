import modificador from './modificador.js'
import ingredientes from './ingredientes.js'

modificador.capitalizarNovo(ingredientes, 'nome');
let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');

let containerIngredientes = document.getElementById('container-ingredientes')

for(let ingrediente of ingredientesOrdenados){


    let textoHTML = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `
    containerIngredientes.innerHTML += textoHTML
}