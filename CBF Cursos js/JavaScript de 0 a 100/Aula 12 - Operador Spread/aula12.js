const objsSpread = [...document.getElementsByTagName('div')] // colchetes para definir como array e 3 pontos para usar o Spread
const objs = document.getElementsByTagName('div') // aqui vira HTMLCollection, suportanto apenas HTML


objsSpread.forEach(element => {
  element.innerHTML = 'Funcionou'
});

console.log(objsSpread)
console.log(objs)

