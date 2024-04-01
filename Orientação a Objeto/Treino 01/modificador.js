var i = 0;

function fnLowerCase(vetor){
     var alteracao = [];
     for(i = 0; i < vetor.length; i++){

          alteracao[i] = vetor[i].toLowerCase();
     }

     return alteracao;
}

export default {
     lower: fnLowerCase
}