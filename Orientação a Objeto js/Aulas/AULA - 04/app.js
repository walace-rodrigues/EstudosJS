import modificador from './modificador.js'

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

var resultadoCapitalizacao = modificador.capitalizar(ingredientes);
var resultadoOrdenacao = modificador.ordenar(ingredientes);
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resultadoCapitalizacao);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta);