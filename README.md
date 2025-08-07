# 💡 Mini-Proyecto-Modelo-03---GRUPO-02
🎯 Mini Proyecto - Grupo 02
---
📦 Proyecto: Lista de Compras

🎯 Objetivo General - Grupo 02
---
Aplicamos SCRUM + XP, GitHub y desarrollo de página web en conjunto, trabajando en equipo de Sprint de 1 día.

## 📌 TABLERO DEL TRELLO  
Sigan o miren nuestro tablero del trello:

### 🔗 [Tablero de Grupo 2 - Lista de Compras](https://trello.com/b/91Zs5e3s/grupo-02-app-web-lista-de-compras)

---

## 🧾 ¿Cómo pueden ejecutar nuestro proyecto?

1. Clonamos el repositorio poniendo:
   ```bash
   git clone https://github.com/SebastianRiosMori/-Mini-Proyecto-Modelo-03---GRUPO-02.git
2. Abrimos el index en nuestro navegador(ya sea el de nuestra preferencia)
3. Y listo, ya podemos visualizarlo

🛜Enlace en nuestra pagina web
---
👤 [Visite nuestro sitio web](https://sebastianriosmori.github.io/-Mini-Proyecto-Modelo-03---GRUPO-02/)
--
👥Integrantes y perfiles
---
| Rol                                  | Nombre             | GitHub                                                     |
| ------------------------------------ | ------------------ | ---------------------------------------------------------- |
| 🧠 Scrum Master                      | Víctor Quispe Curo | [@Victor-master1](https://github.com/Victor-master1)       |
| 📝 Propietario del producto          | Leonel Contreras   | [@ct-Leon](https://github.com/ct-Leon)   |
| 👨‍💻 Equipo de desarrollo (DEV GIT) | Sebastián Ríos     | [@SebastianRiosMori](https://github.com/SebastianRiosMori) |
| 💻 Equipo de desarrollo (JS)         | Guillermo Alejo    | [@william-0519](https://github.com/william-0519)           |
| 🧑‍💻 Equipo de desarrollo (DS)      | Elías Amaya        | [@Elias66-AP](https://github.com/Elias66-AP)               |
| 🎨 Equipo de desarrollo (CSS y HTML) | Roxana Matamoros   | [@rox916](https://github.com/rox916)                       |

💡Historia de Usuarios 
--
🍀U1 - Agregar producto a la lista  
**Descripción:**  
Como usuario, quiero ingresar un nombre de producto y añadirlo a una lista, para tener un control visual de lo que necesito comprar.

**Criterios de Aceptación:**

- El usuario puede escribir el nombre del producto en un campo de texto.  
- Al presionar el botón “Agregar”, el producto se añade a la lista visible.  
- No se permite agregar campos vacíos (validación).  
- Se muestran mensajes de error si el campo está vacío.
---
🍀 HU2 - Guardar lista  
**Descripción:**  
Como usuario, quiero que la lista de compras se mantenga al recargar la página, para no perder mis productos agregados.

**Criterios de Aceptación:**

- La lista de productos se guarda automáticamente en `localStorage`.  
- Al recargar la página, los productos se cargan nuevamente en pantalla.  
- Si no hay datos guardados, se muestra una lista vacía.
---
🍀 HU3 - Eliminar producto de la lista  
**Descripción:**  
Como usuario, quiero poder eliminar un producto de la lista, para mantener solo los productos que aún necesito comprar.

**Criterios de Aceptación:**

- Cada producto debe tener un botón de “Eliminar”.  
- Al hacer clic en “Eliminar”, se borra de la vista y del `localStorage`.  
- Se actualiza la lista en pantalla automáticamente.
---
🍀 HU4 - Validación de campos  
**Descripción:**  
Como usuario, quiero recibir retroalimentación si ingreso datos incorrectos, para evitar errores en la lista de compras.

**Criterios de Aceptación:**

- El campo de entrada no permite texto vacío.  
- Se muestra un mensaje de error en caso de error.  
- Se resalta el input en rojo si hay error.
---
🍀 HU5 - Editar producto existente  
**Descripción:**  
Como usuario, quiero modificar el nombre de un producto, para corregir errores o detalles en mis anotaciones.

**Criterios de Aceptación:**

- Cada producto tiene un botón de “Editar”.  
- Al hacer clic, el producto se vuelve editable.  
- Al guardar cambios, se actualiza la lista y el `localStorage`.
---
🍀 HU6 - Diseño amigable y responsive  
**Descripción:**  
Como usuario, quiero que la interfaz sea clara y funcional en distintos dispositivos, para usar la lista cómodamente desde mi celular o laptop.

**Criterios de Aceptación:**

- La interfaz debe adaptarse a móviles y escritorio.  
- Los botones e inputs deben estar alineados y centrados.  
- Los elementos deben ser legibles.
---
🍀 HU7 - Vaciar toda la lista  
**Descripción:**  
Como usuario, quiero poder eliminar todos los productos de la lista de una vez, para empezar una lista nueva fácilmente.

**Criterios de Aceptación:**

- Existe un botón “Vaciar lista”.  
- Al hacer clic, se borra la lista completa de pantalla y del `localStorage`.  
- Se solicita confirmación antes de eliminar todo.
---
🍀 HU8 - Confirmación visual de acciones  
**Descripción:**  
Como usuario, quiero recibir mensajes de confirmación al realizar acciones, para saber que todo está funcionando correctamente.

**Criterios de Aceptación:**

- Al agregar, eliminar o editar se muestran mensajes tipo “Producto agregado con éxito”.  
- Los mensajes desaparecen tras unos segundos.






