let btn = document.getElementById('btnSubmit')

function verificacao(){
   let age = document.getElementById('myAge').value
   let res = document.getElementById('result')

   if (age == ''){
      	alert(`Digite um valor, mula!`)
   }else if(age == 0){
      res.textContent = 'Você acabou de nascer. Acesso NEGADO!'
   }
   else if (age < 0){
      res.textContent = 'Viajante do tempo? Acesso NEGADO!'
   } else if (age <= 17) {
      res.textContent = 'Você é menor de idade. Acesso NEGADO!'
   } else if ( age >= 100){
      res.textContent = 'Você é quase uma mumia. Acesso NEGADO!'
   } else {
      res.textContent = 'Você é maior de idade e está apto a acessar nosso site.'
   }
}