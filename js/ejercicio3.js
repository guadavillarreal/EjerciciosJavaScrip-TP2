/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let texto;
 do {
            texto = prompt("Ingrese el texto");
            texto=texto.concat(" - ");
            document.write(texto);
 } while (confirm("Seleccione OK para seguir ingresando cadenas de texto, caso contrario precione cancelar") == true);
