function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }

}