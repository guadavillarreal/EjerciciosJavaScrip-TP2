/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…
333
22
1
*/

let num;

num = prompt("Ingrese un número");
if (num <= 50) {
  while (num >= 1) {
    for (let index = 0; index < num; index++) {
      document.write(num);
    }
    document.write("<br>");
    num--;
    console.log(num);
  }
} else {
  alert("No puede ingresar un número mayor a 50");
}
