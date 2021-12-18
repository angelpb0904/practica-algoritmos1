/* Los conejos de Fibonacci. El matemático Leonardo Fibonacci expuso el siguiente problema, haga un programa 
para solucionarlo: Suponga que una pareja de conejos tiene un par de  crías cada mes y a su vez las crías se 
hacen fértiles al cabo de un mes y empiezan a tener sus  propias crías. Si comenzamos con una pareja fértil y 
no muere, ¿Cuántos pares de conejos se  tendrán al cabo de un año?. */


const fibonacci = (n) => {

    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(7);