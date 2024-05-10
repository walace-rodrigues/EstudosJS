function fnDesconto (colecao, atributo){
     var resultado = colecao.map(function(obj){

         return obj[atributo] - (obj[atributo]*10/100); 
     });
     console.log(resultado)
}

function fnCapitalizar (colecao, atributo){
     var resultado = colecao.map(function(obj){

          var letraInicial = obj[atributo].charAt(0).toUpperCase()
          var restoTexto = obj[atributo].slice(1)

          obj = letraInicial + restoTexto

          return obj
     });
     console.log(resultado)
}

export default {
     desconto: fnDesconto,
     capitalizar: fnCapitalizar
}