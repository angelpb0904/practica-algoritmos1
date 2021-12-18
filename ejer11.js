/* La oficina Nacional de Planificación le solicita un programa que haga una tabla de  estimación de la 
población del país para los próximos 10 años. El programa debe solicitar la  población actual, las tasas de 
natalidad y de mortalidad esperadas. Las tasas se expresan  como porcentajes de la población. Por ejemplo, 
si la tasa de natalidad es de un 1.5 %  entonces el número de personas nacidas el año n se espera que sea 
el 1.5 % de la población  del año n-1. */

var poblacion = prompt("Ingrese la población actual");
var tasaNatalidad = prompt("Ingrese la tasa de natalidad");
var tasaMortalidad = prompt("Ingrese la tasa de mortalidad");

function nuevaPoblacion(poblacion, tasaNatalidad, tasaMortalidad) {
    var nuevaPoblacion = poblacion * (1 + tasaNatalidad / 100) - poblacion * (tasaMortalidad / 100);
    return nuevaPoblacion;
}

for (var i = 1; i <= 10; i++) {
    poblacion = nuevaPoblacion(poblacion, tasaNatalidad, tasaMortalidad);
    console.log("Año " + i + ": " + poblacion);
}

console.log("Año " + i + ": " + poblacion);






