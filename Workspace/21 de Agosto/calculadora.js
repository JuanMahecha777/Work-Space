function suma(){
    const element1 = document.getElementById('suma1');
    const element2 = document.getElementById('suma2');
    const resultado = document.getElementById('resultado_suma');

    resultado.innerHTML = parseFloat(suma1.value) + parseFloat(suma2.value);
}