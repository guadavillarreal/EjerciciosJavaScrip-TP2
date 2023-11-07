/*15- Realiza un script que cuente el número de 
vocales que tiene un texto.
*/

let texto;
let contador =0 ;

texto = prompt("Ingrese un texto");
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
    contador ++ ;
  }
}
document.write("La cantidad de vocales que tiene el texto es: " + contador);
