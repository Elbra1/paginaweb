function comprar(producto) {
  const mensaje = `Hola, estoy interesado en el ${producto}. ¿Está disponible?`;
  const numero = "573122575861";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

function toggleMarca(id, tituloElemento) {
  const seccion = document.getElementById(id);
  const icono = tituloElemento.querySelector('.icono');

  if (seccion.style.display === "flex") {
    seccion.style.display = "none";
    icono.textContent = "+"; 
  } else {
    seccion.style.display = "flex";
    icono.textContent = "−";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-enviado");

  formulario.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita la recarga

    alert("Mensaje enviado satisfactoriamente.");

  });
});