var i = 0

function fnCapitalizar (vetor) {
     var modificado = []
  
     for (i = 0 ; i < vetor.length ; i++){
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1)
        var resultado = letraInicial + restoTexto
  
        modificado[i] = resultado
     }
  
     return modificado
}
  
function fnOrdenar (vetor) {

     return vetor.sort(function(a,b){
     return a.localeCompare(b)
     })
}

function fnCaixaAlta (vetor) {
     var modificado = [];

     for(i = 0; i < vetor.length; i++ ){

          modificado[i] = vetor[i].toUpperCase()
     }

     return modificado
}

export default {
     capitalizar: fnCapitalizar,
     ordenar: fnOrdenar,
     caixaAlta: fnCaixaAlta
}