//crear una solicitud XHttpsRequest = solicitud al protocolo https del navegador
const xmlhttp = new XMLHttpRequest();


//definir una función que se va a ejecutar cuando se complete la solicitud que hemos definido
xmlhttp.onload = function () {
    //Para leer un JSON y convertirlo en un objeto se utiliza la expresión JSON.parse(archivo, variable...ll)
    const myObj = JSON.parse(this.responseText); // lo que trae de respuesta esa llamada http
    //inicializamos las variables que se van a mostrar en el HTML

    //iteramos el objeto con los datos del mismo sobre las propiedades JSON
    for(const elem in myObj) {
        if ( elem === "receta") {
            //si la propiedad es pets iteramos con el array mascotas
            for (const p of myObj[elem]) {
                let fila = document.createElement("tr");
                let tabla = document.querySelector("table");
                tabla.appendChild(fila);
                let columna = document.createElement("td");
                columna.textContent = `${p.tipo}`
                fila.appendChild(columna);
                let columna2 = document.createElement("td");
                columna2.textContent = `${p.sabor}`
                fila.appendChild(columna2);
                let columna3 = document.createElement("td");
                columna3.textContent = `${p.textura}`
                fila.appendChild(columna3);
                let columna4 = document.createElement("td");
                columna4.textContent = `${p.temperatura}`
                fila.appendChild(columna4);
            }
        }
    }

}
//configurar la solicitud para obtener el archivo JSON
xmlhttp.open("GET", "views/files/receta.txt");

//enviar la solicitud
xmlhttp.send();