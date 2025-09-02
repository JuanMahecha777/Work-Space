    const nombres=["Santiago", "Miguel", "Maikol", "Patrocla"];
function mostrar() {
    for ( i = 0; i < 4; i++) {
        const nodohijo = document.createElement("h1");
        nodohijo.innerHTML = nombres[i];
        lista.appendChild(nodohijo); 
        const hrimp = document.createElement("hr");
        lista.appendChild(hrimp);

    }
}
