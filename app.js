const form = document.getElementById('formulario');
const nombre = document.getElementById('txtnombre');
const precio = document.getElementById('txtprecio');
const lista = document.getElementById('lstproductos');
const error = document.getElementById('error');

let editando = false;
let indexEditar = null;

let productos = JSON.parse(localStorage.getItem("productos")) || [];

function cargarProductos() {
    lista.innerHTML = "";
    productos.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${product.nom} - S/${product.pre.toFixed(2)}
        <button class="btn btn-warning btn-sm me-2" onclick="editarProducto(${index})">Editar</button>
        <button class="btn btn-danger btn-sm ms-2" onclick="eliminarProductos(${index})">Eliminar</button>
        `;
        lista.appendChild(li);
    });
}

function guardarLocal() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function eliminarProductos(index) {
    productos.splice(index, 1);
    guardarLocal();
    cargarProductos();
}

//Agregar productos:
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nom = nombre.value.trim();
    const pre = parseFloat(precio.value);
    if (nom === "" || isNaN(pre) || pre <= 0) {
        if (error) error.textContent = "Ingresa un nombre válido y un precio mayor a 0.";
        return;
    }
    if (error) error.textContent = "";
    if (editando) {
        productos[indexEditar] = { nom, pre };
        editando = false;
        indexEditar = null;
        document.getElementById("btnagregar").textContent = "Agregar";
    } else {
        productos.push({ nom, pre });
    }
    guardarLocal();
    cargarProductos();
    form.reset();
});


function editarProducto(index) {
    const producto = productos[index];
    nombre.value = producto.nom;
    precio.value = producto.pre;
    editando = true;
    indexEditar = index;
    document.getElementById("btnagregar").textContent = "Guardar Cambios";
}


cargarProductos();
