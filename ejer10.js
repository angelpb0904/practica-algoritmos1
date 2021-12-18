/*  Haga una función eqcuad(a, b, c) la cual retorne la solución positiva de una ecuación cuadrática cuyos 
parámetros son a, b y c respectivamente */

function eqcuad(a, b, c) {
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return "Las soluciones de la ecuación son: " + x1 + " y " + x2;
} 
