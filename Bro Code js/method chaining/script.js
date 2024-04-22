// remover espaços, capitalizar e deixar o resto munúscula

let username = 'walACE'

// without the method chaining

username = username.trim()
let letter = username.charAt(0)
letter = letter.toUpperCase()

let extraChars = username.slice(1)
extraChars = extraChars.toLowerCase()
username = letter + extraChars

console.log(username)

// method chaining

let nickname = 'walACE'

nickname = nickname.trim().charAt(0).toUpperCase() + nickname.trim().slice(1).toLocaleLowerCase()

console.log(nickname)
