/* Haga una función grafArr(arr, num, car) a la cual se le pase un arreglo “arr” de “num”  números reales y 
haga una gráfica usando el carácter “car”. La función debe usar la escala  de 10 caracteres para el máximo y 
0 caracteres para el mínimo valor dentro del arreglo. Si el  carácter usado fuese “+”, la apariencia de la 
salida seria como la siguiente: */

function grafArr(arr, num, car) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let scale = 10 / (max - min);
    let res = "";
    for (let i = 0; i < num; i++) {
        let num = arr[i];
        let pos = Math.round((num - min) * scale);
        for (let j = 0; j < pos; j++) {
            res += car;
        }
        res += " ";
    }
    return res;
}