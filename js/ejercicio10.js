/*10- Realiza un script que pida número de filas y 
columnas y escriba una tabla. Dentro de cada una de 
las celdas deberá escribirse un número consecutivo 
en orden descendente. Si, por ejemplo, la tabla es 
de 7×5 los números irán del 35 al 1.
Ejercicios con Math
*/

let filas;
let columnas;
filas = prompt("Ingrese la cantidad de filas");
columnas = prompt("Ingrese la cantidad de columnas");
num = filas * columnas;

document.write(`<table><tbody>`);
for (let index = 0; index < filas; index++){
  document.write(`<tr>`);
  for (let j = 0; j < columnas; j++){
    document.write(`<td>${num}</td>`);
    //document.write(num);
    //document.write("--");
    num--;
  }
  document.write(`</tr>`);
  //document.write("<br>");
}
document.write(`</tbody></table>`);
