let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')
let labelCount = document.getElementById('labelCount')
let random = document.getElementById('random')

let count = 0

decrease.onclick = function () {
   count--
   labelCount.textContent = count
}

increase.onclick = function () {
   count++
   labelCount.textContent = count
}

reset.onclick = function () {
   count = 0
   labelCount.textContent = count
}


random.onclick = function () {
   let randomMax = document.getElementById('randomMax').value

   if (randomMax <= 0 || randomMax >= 1000 || randomMax == ''){
      alert('Digite um valor entre 1 e 999')
   } else {
      
      count = Math.trunc(Math.random() * randomMax + 1)
      labelCount.textContent = count
   }
}

/*
   Math.random() para gerar um numero aleatorio de 0 até 1
   
   agora para gerar um numero entre 10 e 100
   const min = 10
   const max = 100
   count = 0
   count = Math.trunc(Math.random() * (max - min)) + min
*/

let rollLabel = document.getElementById('rollLabel')
let roll = document.getElementById('roll')

roll.onclick = function () {
   const max = 6
   const min = 1
   let countRoll = Math.trunc(Math.random() * max + min)
   rollLabel.textContent = countRoll
}