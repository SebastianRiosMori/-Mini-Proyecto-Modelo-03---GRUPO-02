const inputProducto = document.getElementById("productoInput");
const inputTipo = document.getElementById("tipoInput");
const inputValor = document.getElementById("valorInput");
const btnAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaProductos");
const btnlimpiar = document.getElementById("btnlimpiar");

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
      <strong>${producto.nom}</strong><br>
      Tipo: ${producto.tipo}<br>
      Valor: ${producto.valor}
      <div class="acciones">
        <button onclick="editarProducto(${index})">Editar</button>
        <button onclick="eliminarProducto(${index})">Borrar</button>
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
  const prod = productos[index];
  inputProducto.value = prod.nom;
  inputTipo.value = prod.tipo;
  inputValor.value = prod.valor;
  editando = true;
  indexEditar = index;
  btnAgregar.textContent = "Guardar Cambios";
}

// Agregar o actualizar producto
btnAgregar.addEventListener("click", () => {
  const nom = inputProducto.value.trim();
  const tipo = inputTipo.value;
  const valor = inputValor.value.trim();

  if (nom === "" || valor === "") {
    return alert("Todos los campos son obligatorios.");
  }

  const nuevoProducto = {
    nom,
    tipo,
    valor: parseFloat(valor)
  };

  if (editando) {
    productos[indexEditar] = nuevoProducto;
    editando = false;
    indexEditar = null;
    btnAgregar.textContent = "Agregar";
  } else {
    productos.push(nuevoProducto);
  }

  guardarLocal();
  cargarProductos();

  // Limpiar inputs
  inputProducto.value = "";
  inputValor.value = "";
  inputTipo.value = "Precio por kilo";
});

// Vaciar lista
btnlimpiar.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que deseas vaciar la lista?")) {
    productos = [];
    guardarLocal();
    cargarProductos();
  }
});

// Cargar al inicio
cargarProductos();
