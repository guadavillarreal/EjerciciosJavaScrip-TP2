/*8- Crea script para generar pirámide siguiente con los números del 1 
al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
*/

let num;
let num1;

num = prompt("Ingrese un número no mayor a 50"); 
//num menor a 50
if (num <= 50) {
    //index menor a num 
  for (let index = 1; index <= num; index++) {

    for (let j = 1; j <=index ; j++) {
        document.write(j);
    }
    document.write("<br>")
  }
} else {
  alert("Número invalido");
}
