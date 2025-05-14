function realizarBusqueda() {
    const termino = document.getElementById("buscar").value;
    if (termino.trim() !== "") {
      window.location.href = `buscar.html?query=${encodeURIComponent(termino)}`;
    }
  }

  