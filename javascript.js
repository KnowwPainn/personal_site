// Function to change the background color of the body
function changeBackgroundColor() {
    // var colortext;
    // colortext = document.getElementById("button-click-text");

    // var body = document.body;
    // var style = window.getComputedStyle(body);
    // var bodyColor = style.backgroundColor;

    // console.log(bodyColor);
    // if(bodyColor == '#ffffff'){
    //     document.body.style.backgroundColor = '#2ecc71';
    //     colortext.innerHTML = "Isn't that cool? Click the button again to change it back to white.";
    // }
    // else{
    //     document.body.style.backgroundColor = '#ffffff';
    //     colortext.innerHTML = "Click the button below to change the color of the website to my favorite color!";
    // }
     // Change the background color to a light green shade
     document.body.style.backgroundColor = '#2ecc71';
}

// Get the button element by its ID
var buttonElement = document.getElementById('changeColorButton');

// Add a click event listener to the button element
buttonElement.addEventListener('click', changeBackgroundColor);
