function realizarBusqueda() {
    const termino = document.getElementById("buscar").value;
    if (termino.trim() !== "") {
      window.location.href = `buscar.html?query=${encodeURIComponent(termino)}`;
    }
  }


  function comprar(producto) {
  const mensaje = `Hola, estoy interesado en el ${producto}. ¿Está disponible?`;
  const numero = "573122575861";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}