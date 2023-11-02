/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, si la edad ingresada no es 
un número válido indicarlo en un mensaje.
 */

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad>18) {
    document.write(`Su edad  ${edad} es mayor a 18 por lo que ya puede conducir`);
    
} else {
    document.write(`Su edad  ${edad} es menor a 18 por lo que no puede conducir aún`);
}

