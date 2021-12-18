/* Dada una matriz de números ordenados, elimine todos los duplicados. No debe utilizar ningún espacio 
adicional; después de eliminar los duplicados en el lugar, devuelva la longitud del subarreglo que no tiene 
duplicado. 
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Removiendo los duplicados tendríamos el arreglo [2, 3, 6, 9].
 */

function eliminarDuplicados(arreglo) {
    var i = 0;
    var j = 0;
    var arregloAux = [];
    while (i < arreglo.length) {
        if (arreglo[i] != arreglo[i + 1]) {
            arregloAux[j] = arreglo[i];
            j++;
        }
        i++;
    }
    return arregloAux.length;
}

console.log(eliminarDuplicados([2, 3, 3, 3, 6, 9, 9]));