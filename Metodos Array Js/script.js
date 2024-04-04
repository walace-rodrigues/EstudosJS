const data = [
     {
          name: 'livia',
          age: 38,
          salary: 2500,
          active: true,
          team: 'Mobile',
          bonus: 0
     },
     {
          name: 'Walace',
          age: 21,
          salary: 1900,
          active: true,
          team: 'Frontend',
          bonus: 0
     },
     {
          name: 'marcos',
          age: 20,
          salary: 5000,
          active: true,
          team: 'Backend',
          bonus: 0
     },
     {
          name: 'ana',
          age: 20,
          salary: 3000,
          active: false,
          team: 'Frontend',
          bonus: 0
     },
]


// Find - Retorna somente o PRIMEIRO valor da lista que cumpra a condição desejada.
const teste1 = data.find((user)=>{
     return user.age >= 20
}) 


// Filter - Retorna TODOS os Objetos (com todas as propriedades e valores) do Array que contenham a condição proposta.
const teste2 = data.filter((user)=>{
     return user.salary >= 3000 && user.active
})



// FindIndex - Busca a posição do objeto no array através da busca de uma propriedade e valor, podemos também modificar algum item presente com base na sua posição.
const teste3 = data.findIndex((user)=>{
     return user.name === 'Walace'
})
console.log(data[teste3].active = false)


// Map -  Percorre o array inteiro e faz a condição desejada sem alterar o array original
const teste4 = data.map((user,index)=>{
     if(user.salary >= 2000){
          user.salary += 1000,
          user.bonus += 1
     }

     return {
          name: user.name,
          salary: user.salary,
          bonus: user.bonus
     }
})
console.log(teste4)


// Some - verifica se existe pelo menos 1 condição correspondente e retorna boolean
const teste5 = data.some((user)=>{
     return user.active == false
})
console.log(teste5)


// Every -