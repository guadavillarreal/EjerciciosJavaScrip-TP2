/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e 
indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */

let nombre;
let edad ;



// alert("Ingrese 3 nombres");
// nombre=prompt("Ingrese un nombre");

alert("Ingrese 3 edades");
for (let index = 0; index <3; index++) {
    edad=prompt("Ingrese la edad")
    maxedad=Math.max(edad);
    document.write(Math.max());
}
