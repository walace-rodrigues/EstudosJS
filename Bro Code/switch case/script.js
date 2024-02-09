let nota = 908

switch (true){
   case nota >= 90:
      console.log(`Parabens, sua nota foi ótima.`)
      break
   case nota >= 60 && nota <= 89:
      console.log(`Ok, voce está na média.`)
      break
   case nota >= 0 && nota <= 59:
      console.log(`Melhore.`)
      break
   default:
      console.log(`Erro! Nota invalida`) 
}