/*
2- Escribir un programa que solicite una nota (número) de
 0  a 10. Luego mostrar la calificación en un alert según 
 los siguientes rangos de nota:
0-2: Muy deficiente     3-4: Insuficiente
5-6: Suficiente         7: Bien
8-9: Notable            10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10
 mostrar un mensaje de “número erróneo”. Si el número 
 ingresado no es válido mostrar el mensaje “Introduce un 
 número válido”.

Ejemplo:
Input: 5                Output: Suficiente
Input: 50               Output: Número erróneo
Input: hola10           Output: Introduce un número válido
*/


let nota = prompt("Ingrese la nota del alumno");

if (!isNaN(nota)) {
        nota=parseInt(nota);
        //alert(nota);
        switch (nota) {
                case 0 || 1 || 2 :
                        alert(nota+"Muy deficiente");
                        break;
                case 3 || 4:
                        alert(nota+"Insuficiente");
                        break;
                case 5 || 6:
                        alert(nota+"Suficiente");
                        break;
                case 7:
                        alert(nota+"Bien");
                        break;
                case 8 || 9:
                        alert(nota+"Notable");
                        break;
                case 10:
                        alert(nota+"Sobresaliente");
                        break;
                default:
                        alert(nota+"Ingreso un nùmero erroneo");

        }
} else {
        alert(nota+"Introduzca un nùmero valido");    
}