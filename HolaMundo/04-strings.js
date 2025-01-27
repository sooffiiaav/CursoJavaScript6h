//Concatenacion
let myName = 'SOFIA'
let greeting = 'Hola' + myName
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('SOFIA')) //indice donde encuentra determinada palabra, si imprime -1 significa que no hay un indice que corresponda con la palabra a buscar
console.log(greeting.includes('SOFIA')) //comprueba si existe, es boolean
console.log(greeting.slice(0,10)) // que imprima lo que haya entre un indice y el otro
console.log(greeting.replace('SOFIA', 'Migui'))

// Template literal (plantillas literales)
let message = ` Hola, este
es mi curso de JavaScript`

console.log(message)

let email = 'velardiezsofia@gmail.com'
console.log(`Hola, ${myName} ! 
    Tu email es: ${email} `)




