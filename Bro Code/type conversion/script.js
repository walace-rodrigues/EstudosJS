document.getElementById('btn').onclick = function(){
   let idade = document.getElementById('idade').value;
   idade = Number(idade)
   // idade = String(idade)
   // idade = Boolean(idade)
   
   if (idade <= 0){
      alert(`Valor inválido`)
   } else {
      idade += 10
      document.getElementById('myH1').textContent = `Olá, voce terá ${idade} anos daqui 10 anos.`
      }
}