/*14- Realiza un script que pida una cadena de texto y lo 
muestre poniendo el signo – entre cada carácter sin usar el 
método replace. Por ejemplo, si tecleo “hola qué tal”, deberá 
salir “h-o-l-a- -q-u-e- -t-a-l”. */

let texto;

texto = prompt("Ingrese un texto cualesquiera");

for (let index = 0; index < texto.length; index++) {
  document.write(texto[index] + "  -  ");
}
