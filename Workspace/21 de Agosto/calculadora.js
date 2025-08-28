function suma(){
    const element1 = document.getElementById('suma1');
    const element2 = document.getElementById('suma2');
    const resultado = document.getElementById('resultado_suma');

    resultado.innerHTML = parseFloat(suma1.value) + parseFloat(suma2.value);
}

function multiplicacion(){
    const element1 = document.getElementById('multiplicacion1');
    const element2 = document.getElementById('multiplicacion2');
    const resultado = document.getElementById('resultado_multiplicacion');

    resultado.innerHTML = parseFloat(multiplicacion1.value) * parseFloat(multiplicacion2.value);
}

function resta(){
    const element1 = document.getElementById('resta1');
    const element2 = document.getElementById('resta2');
    const resultado = document.getElementById('resultado_resta');

    resultado.innerHTML = parseFloat(resta1.value) - parseFloat(resta2.value);
}

function division(){
    const element1 = document.getElementById('division1');
    const element2 = document.getElementById('division2');
    const resultado = document.getElementById('resultado_division');

    resultado.innerHTML = parseFloat(division1.value) / parseFloat(division2.value);
}
