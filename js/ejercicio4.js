/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es 
un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir 
con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let num;
let num1=0;

while (confirm("Desea ingresar un número?") === true) {
  num = parseInt(prompt("Ingrese un numero"));
  console.log(num);
  if (num != NaN) {
    document.write(num);
    prompt(confirm("Desea seguir ingresando números?"));
    console.log(num);
    num1 = num1 + num;
  } else {
    alert("Ingrese un valor valido");
    console.log(num);
  }
}
document.write('<br>'+num1);
