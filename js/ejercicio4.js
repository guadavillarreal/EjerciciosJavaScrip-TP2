/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es 
un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir 
con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let num;
do {
  num = parseInt(prompt("Ingrese un número"));
  console.log(num);
  if (!isNaN(num)) {
    console.log(num);
    num = num + num;
    console.log(num);
  } else {
    alert("Ingrese un valor valido");
  }
} while (confirm("Desea seguir ingresando números") != false);
document.write("La suma de todos los numeros ingresados es: " + num);
