let fullName = 'Walace Evangelista Rodrigues'

let firstName = fullName.slice(0, fullName.indexOf(' '))
console.log(`Seu primeiro nome é ${firstName}`)

let lastName = fullName.slice(fullName.lastIndexOf(' ')/* +1 */)
console.log(`Seu último nome é ${lastName.slice(1)}`) // coloquei esse slice(1) pra tirar o espaço, mas o +1 no indexOf tambem funciona.

let nickName = fullName.slice(0,3)
console.log(`Suas primeiras 3 letras são ${nickName}`)

let nickNameReverse = fullName.slice(0, fullName.indexOf(' ')) // pego o primeiro nome
console.log(`As ultimas 3 letras do seu nome são ${nickNameReverse.slice(-3)}`) //faco pegar de tras pra frente 

// slice(start, end)
// slice(-3) faz a contagem de tras pra frente de onde ele vai comecar 
// indexOf('A') busca o primeiro A da string
// lastIndexOf('A') busca o ultimo A da string


// usar o inicio do email como username 

let email = 'walacerodrigues2003@gmail.com'
let user = email.slice(0, email.indexOf('@'))
let extension = email.slice(email.indexOf('@') +1 )
console.log(`Seu nome de usuário será o que vem antes do seu e-mail, logo seu nome de usuário é ${user}`)
console.log(`Sua extensão é ${extension}`)