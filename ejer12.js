/* Haga una función cdig(), cuyo prototipo es: var cdig = function(cantidad, dígito){ //código aquí} 
Se desea que dicha función retorne las veces que el dígito d este contenido en el número n.  
Por ejemplo, cdgi(1241, 1) = 2 veces aparece el dígito 1 en la cantidad 1241
 */

let cantidad = 21311;
let digito = 1;

let cdig = function(cantidad, digito){
    let contador = 0;
    let cadena = cantidad.toString();
    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] == digito){
            contador++;
        }
    }
    return contador;
}