/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

// let texto=prompt("Ingrese un texto");
// document.write(texto=texto+" - ");
// texto=prompt("Ingrese un texto");
// document.write(texto=texto+" - ");

//confir (true); //lo inicializo en true 
let texto;
let texto2;
 do {
            texto = prompt("Ingrese el texto");
            texto=texto.concat(" - ");
            //texto=" - "+texto+" - ";
            document.write(texto);
 } while (confirm("Seleccione OK para seguir ingresando cadenas de texto, caso contrario precione cancelar") == true);
 //document.write(texto.concat(" - "+ texto));
 //document.write(`<br>`+texto);
