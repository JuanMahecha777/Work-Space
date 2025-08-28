let almacenamiento = [ ];

function almacenar() {
    const dato = document.getElementById("texto");
    almacenamiento.push(dato.value)
    dato.value = "";
    mostrar()
} 

function mostrar() {
    const elemntos = document.getElementById("mostrar");
    almacenamiento.forEach((elemento) => {
        const ele = document.createElement ("h1");
        ele.innerHTML = elemento;
        elementos.appendChild (ele);

    })


}


   
