const array = [4,3,5,4,6]


console.log(array.length)
console.log(array)

array.pop()

console.log(array)

array.push(7)
console.log(array)


console.log(array.reverse())

const numeros = [1,3,4,5,6]

numeros.unshift(0) // Adicionar no inicio

console.log(numeros)

numeros.splice(1,0,'a')

console.log(numeros)

//Encontrar valores

const letras = ["a", "b", "c"]


console.log(letras.indexOf("d")) // Por tipo

console.log(letras.lastIndexOf("b")) // Ultima vez que ocorreu

console.log(letras.includes("b"))


// array de objetos

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'}
]


const marca = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(marca)


// ArrayFunctions


const teste = [
    {
        id: 1,
        nome: "Roberta"
    },
    {
        id: 2,
        nome: "Roberto"
    }
]







