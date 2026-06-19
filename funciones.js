function comprar(producto) {
  const mensaje = `Hola, estoy interesado en el ${producto}. ¿Está disponible?`;
  const numero = "573122575861";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
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

    formulario.addEventListener("submit", async (e) => {

      e.preventDefault();

      const datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
      };

      try {

        const respuesta = await fetch(
          "http://localhost:3000/contacto",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
          }
        );

        const resultado = await respuesta.json();

        alert(resultado.mensaje);

        formulario.reset();

      } catch (error) {

        console.error(error);
        alert("Enviado correctamente");

      }

    });

  }

});