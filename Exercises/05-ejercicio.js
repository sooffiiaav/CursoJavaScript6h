 // if / else 

 // 1. 
 let valor = 5

 if( valor == 5){
    console.log('Mi nombre es sofi')
 }else{
    console.log("el valor es distinto")
 }

 const message = valor == 5 ? "mi nombre es sofi" : "el valor es distinto"
 console.log(message)

 //switch
 let idioma = 1
 let saludo

 switch(idioma){
    case 1:
        saludo = 'Hola'
        break
    case 2:
        saludo = 'Hello'
        break
    case 3:
        saludo = 'Bonjour'
        break
    default: 'Error con respeto al valor '
 }