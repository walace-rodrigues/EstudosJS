document.getElementById('btn').onclick = function (){
   let nome = document.getElementById('nome').value;
   document.getElementById('myH1').textContent = `Olá ${nome}`
}