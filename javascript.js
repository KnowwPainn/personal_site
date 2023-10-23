// Function to change the background color of the body
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#2ecc71'; // Change the background color to a light green shade
}

// Get the button element by its ID
var buttonElement = document.getElementById('changeColorButton');

// Add a click event listener to the button element
buttonElement.addEventListener('click', changeBackgroundColor);
