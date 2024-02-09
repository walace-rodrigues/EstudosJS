let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')
let result3 = document.getElementById('result3')
let result4 = document.getElementById('result4')
let result5 = document.getElementById('result5')
let result6 = document.getElementById('result6')

let bnt = document.getElementById('btn')

bnt.onclick = function() {
   let i = 0
   let count = 0
   let r1 = 0
   let r2 = 0
   let r3 = 0
   let r4 = 0
   let r5 = 0
   let r6 = 0
   let max = 6
   let min = 1
   while(i < 10){

      i++
      
      count = Math.trunc(Math.random() * max + min)

      if(count == 1){
         r1++
      } else if (count == 2){
         r2++
      }else if (count == 3){
         r3++
      }else if (count == 4){
         r4++
      }else if (count == 5){
         r5++
      }else if (count == 6){
         r6++
      } else {
         alert('Erro!')
      }

      result1.textContent = r1 + "x"
      result2.textContent = r2 + "x"
      result3.textContent = r3 + "x"
      result4.textContent = r4 + "x"
      result5.textContent = r5 + "x"
      result6.textContent = r6 + "x"
   }
}
