let frase= 'Me gustas desde que te ví por primera vez'
console.log(frase.length)
console.log(frase.charAt(40))
console.log(frase.slice(0,8))
let nuevaFrase= frase.slice(0,8)
console.log(`${nuevaFrase} desde que te ví --> 'Esta frase: ' ${frase} tiene ${frase.length} caracteres`)
console.log(typeof(frase))



let arrayFrase = frase.split(' ')/*Como resultado. [
    'Me',    'gustas',
    'desde', 'que',
    'te',    'ví',
    'por',   'primera',
    'vez'
  ]*/
console.log(arrayFrase)
console.log(typeof(arrayFrase))
console.log(arrayFrase.length)

/* String en objeto con new */
console.log('***********************')
const stringObjeto = new String('Soy un String Objeto')
console.log(typeof(stringObjeto))

console.log(stringObjeto.slice(0,3))//Muestra: Soy
console.log(stringObjeto.charAt(7))//Muestra la letra en posición 4
console.log(stringObjeto.indexOf('O'))//Muestra el indice donde se encuentra la letra 'O'
console.log(stringObjeto.indexOf('un'))//Muestra el indice donde se encuentra la palabra 'un'
console.log(stringObjeto.indexOf('cielito'))//Muestra con -1 que no existe la letra o palabra en la variable u objeto
console.log(stringObjeto.lastIndexOf('Objeto'))//Muestra la última aparición de la letra o palabra que buscamos
console.log(stringObjeto.length)
console.log(stringObjeto.toLocaleLowerCase())//Devuelve toda la cadena en minuscula.
console.log(stringObjeto.toLocaleUpperCase())//Devuelve toda la cadena en mayuscula.
console.log(stringObjeto.split(' '))//Este devuelve un objeto separado por el espacio que le dimos como 'parametro'.
//console.log(stringObjeto.push(' .'))
console.log(stringObjeto.concat(arrayFrase))//concatena dos objetos








