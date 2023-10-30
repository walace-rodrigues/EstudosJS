
var a = document.getElementsByClassName('container')
a.addEventListener('click', clicar)

function clicar(){
    a.innerText = 'Clicou'
    a.style.background = 'red'
}