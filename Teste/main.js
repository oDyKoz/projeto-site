// Adds an event listener to the document object that listens for a 'click' event
document.addEventListener('click', (event) => {
  // Use const for variables that won't be reassigned
  const { target } = event;

  // Check if the target element of the event is not the 'menu' element itself
  // nor one of its descendants
  if (!menu.contains(target)) {
    // Call the 'hideMenu' function to hide the menu if the target element is not within the menu
    hideMenu();
  }
});

// Rename 'ocultarMenu' to 'hideMenu' for better readability and consistency
function hideMenu() {
  // TODO: hide the menu
}

// Declare the 'menu' variable outside the event listener function
// to avoid re-declaring it every time the event is triggered
const menu = document.querySelector('#menu');
