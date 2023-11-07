/*16- Realiza un script que pida una cadena de texto y 
la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”.
*/
let texto ;
let texto2;

texto = prompt("Ingrese un texto cualesquiera");
texto2 = texto.split("").reverse().join("");
document.write(texto2);