/* Escriba un programa al cual se le digite un número e imprima por consola su nombre
   cuantas veces como lo indique el número digitado.*/

   // Leer numero 
let num = 9;
let sum = 0;

// not !
while( !(num == 0)   ){
    sum += num;
    --num;
}

console.log(sum);


// Gauss
num = 9;
let sum_gauss = num * (num + 1)/2
console.log(sum_gauss);