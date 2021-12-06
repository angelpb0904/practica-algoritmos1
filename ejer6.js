/*El banco le solicita un programa para cálculo en las libretas de ahorro. Si usted ingresa una  cantidad en
 una libreta de ahorros, su capital ira incrementando a medidas que gana  intereses mensuales. Haga un 
 programa al cual se le digite el monto a ahorrar, la tasa de  interés, los meses de ahorro y que imprima por 
 consola el monto al final del ahorro. */


// libreta de ahorro

// cuenta total
// lo que ingreso
// interes mensuales 
// meses de ahorros 
// meta de ahorros(100,000)


let cantidadDeAhorros = prompt(`Introuzca su cantidad de ahorros`)*1;
const tasaDeIntereses = 1.99;
let mesesDeAhorros = prompt(`introduzca los meses`)*1;
let gananciasPorMes = cantidadDeAhorros * (tasaDeIntereses/100)
let totalGanancias  = mesesDeAhorros * gananciasPorMes;


console.log(totalGanancias);
