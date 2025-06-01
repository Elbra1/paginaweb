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

 document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Mostrar el mensaje en la página
    const mensaje = document.getElementById("mensaje-enviado");
    mensaje.style.display = "block";

    // Limpiar el formulario (opcional)
    this.reset();

    // Ocultar el mensaje después de unos segundos (opcional)
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 5000); // 5 segundos
  });


