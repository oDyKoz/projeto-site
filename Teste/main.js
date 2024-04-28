document.addEventListener('click', function (evento) {
  if (!menu.contains(evento.target)) {
    ocultarMenu();
  }
});