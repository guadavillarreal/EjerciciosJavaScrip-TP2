/*17- Realiza un script que muestre la posición 
de la primera vocal de un texto introducido por teclado.
Ejemplo:    Input: Hola mundo
            Output: la vocal ‘o’ está en la posición 1
*/

let texto;
let bandera = 0;

texto = prompt("Ingrese un texto cualesquiera");
texto = texto.toLowerCase();

for (let index = 0; index < texto.length; index++) {
  if (
    texto.charAt(index) === "a" ||
    texto.charAt(index) === "á" ||
    texto.charAt(index) === "e" ||
    texto.charAt(index) === "é" ||
    texto.charAt(index) === "i" ||
    texto.charAt(index) === "í" ||
    texto.charAt(index) === "o" ||
    texto.charAt(index) === "ó" ||
    texto.charAt(index) === "u" ||
    texto.charAt(index) === "ú"
  ) {
    console.log(bandera);
    bandera = index;
    console.log(index);
    index = texto.length;
    console.log(index);
  }
}
document.write(texto.charAt(bandera));
