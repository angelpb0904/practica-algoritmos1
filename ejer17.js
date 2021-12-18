/*  Haga una función que utilice números, la ecuación debe resolver ecuaciones cuadráticas con  la forma 
ax^2+bx+c=0, ecuCuad(a, b, c) debe retornar la solución positiva de la ecuación  cuyo parámetros sean 
a, b y c respectivamente. */

function ecuCuad(a, b, c) {
    var x1, x2;
    var raiz = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    x1 = (-b + raiz) / (2 * a);
    x2 = (-b - raiz) / (2 * a);
    return "x1 = " + x1 + " x2 = " + x2;
}

console.log(ecuCuad(1, 2, 3));

