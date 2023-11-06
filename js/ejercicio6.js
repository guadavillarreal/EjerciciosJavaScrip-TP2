/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/

let num =0 ;

for (let index = 0; index < 30; index++) {
    num ++;
    document.write("<br>"+num);
    for (let index = 1; index <num; index++) {    
    document.write(num);
    }   
}