/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego 
mostrar la calificación en un alert según los siguientes rangos de nota:
        0-2: Muy deficiente         3-4: Insuficiente
        5-6: Suficiente             7: Bien
        8-9: Notable                10: Sobresaliente 
    Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un 
    mensaje de “número erróneo”. Si el número ingresado no es válido mostrar 
    el mensaje “Introduce un número válido”.
        Ejemplo:
            Input: 5            Output: Suficiente
            Input: 50           Output: Número erróneo
            Input: hola10       Output: Introduce un número válido          
*/

let nota =
  prompt("Ingrese la nota del alumno, el rango tiene que ser de 0 a 10 ");

if ( nota >=0 && nota <= 10 ) {
  if (nota >= 5) {//para aprobados
    if (nota < 7) {//5-6
      alert("Suficiente");
    }
    if (nota === 7) {//7
      alert("Bien");
    } else if (nota === 8 || nota === 9) {
      alert("Notable");
    } else alert("Sobresaliente");
  } else {
    if (nota === 2 || nota === 1 || nota ===0) {
      alert("Muy deficiente");
    }
    if (nota === 4 || nota === 3) {
      alert("Insuficiente");
    }
  }
} else {
  if (nota === Number) {
    alert("Ingreso un número erroneo");
  } else {
    alert("Introduzca un número valido");
  } 
}

