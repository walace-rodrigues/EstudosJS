let check = document.getElementById('myCheckbox')
let submit = document.getElementById('submitBtn')
let visa = document.getElementById('visaRadio')
let master = document.getElementById('masterRadio')
let nubank = document.getElementById('nubankRadio')

submit.onclick = function(){
let response = document.getElementById('response')
if(check.checked){
   if(visa.checked){
      response.textContent = 'Parabens por escolher Visa como sua opção.'
   } else if (master.checked){
      response.textContent = 'Parabens por escolher MasterCard como sua opção.'
   } else if (nubank.checked){
      response.textContent = 'Parabens por escolher Nubank como sua opção.'
   } else {
      response.textContent = 'Escolha uma opção.'
   }
} else {
   response.textContent = 'Não está checado.'
}
}