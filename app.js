// Elementos del DOM
const inputProducto = document.getElementById("productoInput");
const btnAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaProductos");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

let editando = false;
let indexEditar = null;

// Cargar productos en pantalla
function cargarProductos() {
  lista.innerHTML = "";
  productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.classList.add("item-producto");
    li.innerHTML = `
      ${producto.nom}
      <div class="acciones">
        <button onclick="editarProducto(${index})">✏️</button>
        <button onclick="eliminarProducto(${index})">🗑️</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

// Guardar en localStorage
function guardarLocal() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Eliminar producto
function eliminarProducto(index) {
  productos.splice(index, 1);
  guardarLocal();
  cargarProductos();
}

// Editar producto
function editarProducto(index) {
  inputProducto.value = productos[index].nom;
  editando = true;
  indexEditar = index;
  btnAgregar.textContent = "Guardar Cambios";
}

// Agregar o guardar producto
btnAgregar.addEventListener("click", () => {
  const nom = inputProducto.value.trim();
  if (nom === "") return alert("Ingresa un nombre válido.");

  if (editando) {
    productos[indexEditar].nom = nom;
    editando = false;
    indexEditar = null;
    btnAgregar.textContent = "Agregar";
  } else {
    productos.push({ nom });
  }

  guardarLocal();
  cargarProductos();
  inputProducto.value = "";
});

// Cargar al inicio
cargarProductos();
