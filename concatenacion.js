
//Concatenación con: Join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de mexico'
const terceraParte = 'porque son buena gente'
const mensaje = [primeraParte, segundaParte, terceraParte]
console.log(mensaje.join(' - '))

//Concatenación con: Concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis habilidades son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3)
console.log(hobbies)

//Concatenación normal
let nombre = 'Jorge Armando'
let apellido = 'Rizo Ibañez'
console.log('Este es mi nombre completo: ' + nombre + ' ' + apellido)

//Concatenacion con ` ` Templates literals.
let edad= 39
let grupoSanguineo = 'B+'
let id = 13589321
console.log(`Este es mmi nombre : ${nombre} ${apellido}, y estos son mis datos personales: Edad --> ${edad} años, Grupo sanguineo -->  ${grupoSanguineo}, id -->  ${id}.`)

//Uso comillas sencillas y dobles  
const escapeBarraInvertida = "I\'m  Jorge"
const escapeBarraInvertida1 = 'I\'m  Jorge1'
console.log(escapeBarraInvertida)
console.log(escapeBarraInvertida1)


