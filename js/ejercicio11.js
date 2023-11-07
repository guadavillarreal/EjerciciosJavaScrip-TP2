/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e 
indique el nombre del mayor.
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre;
let edad ;
let posicion  ;

alert("Ingrese 3 nombres con sus edades");
nombre1= prompt("Ingrese el 1er nombre");
edad1=prompt("ingrese la edad");
nombre2= prompt("Ingrese el 2do nombre");
edad2=prompt("ingrese la edad");
nombre3= prompt("Ingrese el 3er nombre");
edad3=prompt("ingrese la edad");

const mayor = Math.max(edad1, edad2, edad3);
if (mayor===edad1) {
    document.write("El mayor es "+ nombre1 +" "+ edad1);
}else if (mayor=== edad2) {
    document.write("El mayor es "+ nombre2+" "+ edad2);
} else {
    document.write("El mayor es "+ nombre3+" "+ edad3);
}

