document.addEventListener('DOMContentLoaded', (event) => {

const container = document.getElementById("container");
const resetBtn = document.getElementById('resetBottom');

function makeRows(num) {
    container.innerHTML= ''; /*Limpia el contenedor para volver a crear otro grid*/
    for (i = 0; i < (num * num); i++) {
        let cell = document.createElement("div");
        cell.style.opacity = 0; //opacidad inicial
        container.appendChild(cell).className = "grid-item";

         // Evento para cambiar el color al pasar el mouse
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor();
        });


        //evento para disminuir la opacidad 
        cell.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(cell.style.opacity || 0.1);
            if (currentOpacity < 1) {
                cell.style.opacity = currentOpacity + 0.1;
            }
        })
    };

        // Ajusta el tamaño de las celdas dinámicamente
    document.querySelectorAll('.grid-item').forEach(item => { 
        item.style.width = `${100 / num}%`;
        item.style.height = `${100 / num}%`;
    });

    // Función para generar un color aleatorio
    function getRandomColor() {
        let letters = '0123456789ABCDF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
};

function btnPrompt(){
    let valor = 0;
    
    while (true) {
        valor = prompt('Coloque un numero menor o igual a 100');
          // Convertir el valor a un número
        valor = parseInt(valor);

         // Verificar si el valor ingresado es un número válido y menor o igual a 100
        if(!isNaN(valor) && valor <= 100) {
            break; // Salir del bucle si el valor es válido
        }
        else {
            alert('Solo puede colocar un valor menor a 100')
        };
    };
    return valor;
};

makeRows(8);

resetBtn.addEventListener('click', () => {
    makeRows( btnPrompt());
});



});