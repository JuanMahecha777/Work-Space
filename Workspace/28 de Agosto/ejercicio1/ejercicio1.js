function verificar() {
    const numero = document.getElementById('numero');
    const numeroint = parseFloat(numero.value);
    if (numeroint > 0 && numeroint %2 === 0) {
        alert("El número es positivo y par");
    } else if (numeroint < 0 && numeroint %2 !== 0 ) {
        alert("El número es negativo e impar");
    } else if (numeroint > 0 && numeroint %2 !== 0) {   
        alert("El número es positivo e impar");
    } else if (numeroint < 0 && numeroint %2 === 0) {
        alert("El número es negativo y par");
    } else {
        alert("El número es cero");
    }

}