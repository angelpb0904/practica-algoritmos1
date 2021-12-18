/* Los números de Pitágoras pueden ser descritos de la siguiente manera: a² + b² = c², donde a,  b y c son 
enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un  programa para encontrar
5 ternas de números de Pitágoras. Por ejemplo: (a) 3² + 4² = 5², 5² +12² = 13² */

for (var a = 0; a < 5; a++) {
    for (var b = 0; b < 5; b++) {
        for (var c = 0; c < 5; c++) {
            if (a * a + b * b == c * c) {
                console.log(a + "² + " + b + "² = " + c + "²");
            }
        }
    }
}
