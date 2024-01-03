function contar(){

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar.'
        // window.alert('ERRO ! Faltam dados.')
    } else {
        res.innerHTML = 'Contando: <br>' 
        // Conversão dos valores string para Number:
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert(`Passo Inválido! Considerando passo 1.`)
            p = 1
        }

        if( i < f){
            // contagem crescente
            for (let c = i ; c <= f ; c += p){ 
                // += serve para nao substituir o anterios e apenas adicionar mais no InnerHTML
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            // contagem decrescente
            for( let c=i ; c>=f ; c-=p){ 
                res.innerHTML += `${c} \u{1F449}`
            }  
        }
        res.innerHTML += `\u{1F3C1}`
    }        
}