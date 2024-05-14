// Adds an event listener to the document object that listens for a 'click' event
document.addEventListener('click', function (evento) {
  
  // Checks if the target element of the event is not contained within the 'menu' element
  if (!menu.contains(evento.target)) {
    
    // Calls the 'ocultarMenu' function to hide the menu if the target element is not within the menu
    ocultarMenu();
  }
});
