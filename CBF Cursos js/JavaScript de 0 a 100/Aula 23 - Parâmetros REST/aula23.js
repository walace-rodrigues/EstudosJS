// soma quantos valores forem passados como parâmetro

function soma(...valores){
  let tamanho = valores.length
  let res = 0

  /*
  for (let i = 0 ; i < tamanho ; i++){
    res += valores[i]
  }
  */

  for (let valor of valores){
    res += valor
  }
  console.log(res)
}

soma(3,5,1)