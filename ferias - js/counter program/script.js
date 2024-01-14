let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')
let labelCount = document.getElementById('labelCount')
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
