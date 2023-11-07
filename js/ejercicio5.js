/*5- Realizar una página con un script que calcule el valor de la letra de un número 
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
    El número debe ser entre 0 y 99.999.999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo:    Input:  40773821                Output: ‘L’
*/

let dni;
let index = 0;
let letradni;
let confirmacion;

while (confirmacion != false) {

  dni = prompt("Ingrese el número de dni");

  if (dni >= 0 || dni <= 99999999 && !isNaN(dni)) {
    letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    index = dni % 23;
    letradni = letras.charAt(index);
  } else {
    alert("Ingrese un número valido");
  }
  confirmacion = confirm("Desea seguir ingresando?");
}
document.write(
  "Con el número de dni " + dni + " la letra correspondiente es: " + letradni);
