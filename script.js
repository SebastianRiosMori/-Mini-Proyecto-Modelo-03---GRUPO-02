const inputProducto = document.getElementById("producto");
const inputTipo = document.getElementById("tipo");
const inputValor = document.getElementById("cantidad");
const btnAgregar = document.getElementById("btnagregar");
const lista = document.getElementById("lista");
const btnlimpiar = document.getElementById("vaciar");

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
      <span><strong>${producto.nom}</strong></span>
      <span>Tipo: ${producto.tipo}</span>
      <span>Valor: ${producto.valor}</span>
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
  editarProductoInput.value = prod.nom;
  editarCantidadInput.value = prod.valor;
  editarTipoInput.value = prod.tipo;
  indexEditar = index;

  modal.style.display = "block"; // Mostrar modal
}


// Agregar o actualizar producto
btnAgregar.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir que el formulario se recargue
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
  inputTipo.value = "unidades";
});

// Vaciar lista
btnlimpiar.addEventListener("click", () => {
  if (confirm("¿Estás seguro de que deseas vaciar la lista?")) {
    productos = [];
    guardarLocal();
    cargarProductos();
  }
});

//Mdal:
const modal = document.getElementById("modal");
const editarProductoInput = document.getElementById("editar-producto");
const editarCantidadInput = document.getElementById("editar-cantidad");
const editarTipoInput = document.getElementById("editar-tipo");
const btnGuardarCambios = document.getElementById("guardar-cambios");
const btnCerrarModal = document.getElementById("cerrar-modal");

btnGuardarCambios.addEventListener("click", () => {
  const nom = editarProductoInput.value.trim();
  const valor = editarCantidadInput.value.trim();
  const tipo = editarTipoInput.value;

  if (nom === "" || valor === "") {
    return alert("Todos los campos son obligatorios.");
  }

  productos[indexEditar] = {
    nom,
    tipo,
    valor: parseFloat(valor)
  };

  guardarLocal();
  cargarProductos();
  modal.style.display = "none"; // Cerrar modal
});

btnCerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
  editando = false;
  indexEditar = null;
});

// Cargar al inicio
cargarProductos();
