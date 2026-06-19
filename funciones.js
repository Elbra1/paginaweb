function comprar(producto) {
const mensaje = Hola, estoy interesado en el ${producto}. ¿Está disponible?;
const numero = "573122575861";
const url = https://wa.me/${numero}?text=${encodeURIComponent(mensaje)};
window.open(url, "_blank");
}

function toggleMarca(id, tituloElemento) {
const seccion = document.getElementById(id);
const icono = tituloElemento.querySelector(".icono");

if (seccion.style.display === "flex") {
seccion.style.display = "none";
icono.textContent = "+";
} else {
seccion.style.display = "flex";
icono.textContent = "−";
}
}

document.addEventListener("DOMContentLoaded", () => {

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // 👉 MENSAJE PARA WHATSAPP
  const texto =

`Hola MoviYa:

Nombre: ${nombre}
Correo: ${correo}

Mensaje:
${mensaje}`;

  const numero = "573122575861";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // 👉 ABRE WHATSAPP
  window.open(url, "_blank");

  // 👉 LIMPIA FORMULARIO
  formulario.reset();

});

}

});