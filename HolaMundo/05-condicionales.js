
let age = 37

if(age == 37){
    console.log('Tu edad es 37')
}else if (age <18){
    console.log('Es menor de edad')
}else{
    console.log('Tu edad no son 37')
}

//Operador ternario
const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

//switch

let day = 1
let dayName

switch(day){
    case 1:
        dayName = 'lunes'
        break
    case 2:
        dayName = 'Martes'
        break
    case 3: 
        dayName = 'miercoles'
        break
    default:
        dayName = 'Numero de dia incorrecto'
}
console.log(dayName)