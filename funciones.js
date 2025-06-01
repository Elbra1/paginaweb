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
    icono.textContent = "+"; // Cambia a "+" al cerrar
  } else {
    seccion.style.display = "flex";
    icono.textContent = "−"; // Cambia a "−" al abrir
  }
}




document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-enviado");

  formulario.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita la recarga

    const datos = new FormData(formulario);

    try {
      const respuesta = await fetch("https://formspree.io/f/tu-email", {
        method: "POST",
        body: datos,
        headers: {
          Accept: "application/json",
        },
      });

      if (respuesta.ok) {
        mensaje.style.display = "block";
        formulario.reset();

        setTimeout(() => {
          mensaje.style.display = "none";
        }, 5000);
      } else {
        alert("Hubo un error al enviar. Intenta nuevamente.");
      }
    } catch (error) {
      alert("Error de red. Intenta más tarde.");
    }
  });
});