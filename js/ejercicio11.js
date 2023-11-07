/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e 
indique el nombre del mayor.
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre1;
let nombre2;
let nombre3;
let edad1;
let edad2;
let edad3;

alert("Ingrese 3 nombres con sus edades");
nombre1= prompt("Ingrese el 1er nombre");
edad1=prompt("ingrese la edad");
nombre2= prompt("Ingrese el 2do nombre");
edad2=prompt("ingrese la edad");
nombre3= prompt("Ingrese el 3er nombre");
edad3=prompt("ingrese la edad");

const mayor = Math.max(edad1, edad2, edad3);
if (mayor===edad1) {
    document.write("El mayor es "+ nombre1 +" de "+ edad1+ " años");
}else if (mayor=== edad2) {
    document.write("El mayor es "+ nombre2+" de "+ edad2+" años");
} else {
    document.write("El mayor es "+ nombre3+" de "+ edad3+ " años");
}

