// Función para cargar los ítems desde el almacenamiento local al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    mostrarListado(); // Muestra el listado guardado al cargar la página
});

// Función para agregar un nuevo ítem
document.getElementById('agregar').addEventListener('click', function () {
    const nuevoItem = document.getElementById('item').value;

    if (nuevoItem.trim() !== "") { // Verifica que el campo no esté vacío
        let listado = JSON.parse(localStorage.getItem('listado')) || [];

        // Agregar el nuevo ítem al listado
        listado.push(nuevoItem);

        // Guardar el listado actualizado en el almacenamiento local
        localStorage.setItem('listado', JSON.stringify(listado));

        // Actualizar la vista del listado
        mostrarListado();

        // Limpiar el campo de texto
        document.getElementById('item').value = "";
    }
});

// Función para limpiar el listado
document.getElementById('limpiar').addEventListener('click', function () {
    // Eliminar el listado del almacenamiento local
    localStorage.removeItem('listado');

    // Actualizar la vista del listado
    mostrarListado();
});

// Función para mostrar el listado almacenado en la vista
function mostrarListado() {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = ''; // Limpia el contenido actual

    let listado = JSON.parse(localStorage.getItem('listado')) || [];

    // Recorrer el listado y mostrar cada ítem
    listado.forEach(function (item, index) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
    });
}
