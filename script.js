const imageArray = ['apple.PNG', 'cherry.PNG', 'coconut.PNG'];
let clickedButtons = [];
let button1ClickCount = 0;
let button2ClickCount = 0;

function buttonClick(buttonId) {
    // Check if the button was already clicked
    if (clickedButtons.includes(buttonId)) {
        // If so, reset the clicked buttons array
        clickedButtons = [];
    } else {
        // Add the clicked button to the array
        clickedButtons.push(buttonId);
    }

    // Check if the combination is correct (Button 1, Button 2, and Button 3 in order)
    if (clickedButtons.join('') === 'button1button2button3') {
        const displayedImage = document.getElementById('displayed-image');
        displayedImage.src = imageArray[0]; // Change this to the desired image
        // Reset the clicked buttons array after displaying the image
        clickedButtons = [];
    }
    if (clickedButtons.join('') === 'button3button2button1') {
        const displayedImage = document.getElementById('displayed-image');
        displayedImage.src = imageArray[1]; // Change this to the desired image
        // Reset the clicked buttons array after displaying the image
        clickedButtons = [];
    }
   
    if (buttonId === 'button1') {
        // Increment the click count for Button 1
        button1ClickCount++;

        // Check if Button 1 was clicked twice
        if (button1ClickCount === 2 && button2ClickCount === 1) {
            const displayedImage = document.getElementById('displayed-image');
            displayedImage.src = imageArray[2]; // Change this to the desired image
            // Reset the click counts after displaying the image
            button1ClickCount = 0;
            button2ClickCount = 0;
        }
    } else if (buttonId === 'button2') {
        // Increment the click count for Button 2
        button2ClickCount++;

        // Check if Button 1 was clicked twice and Button 2 once
        if (button1ClickCount === 2 && button2ClickCount === 1) {
            const displayedImage = document.getElementById('displayed-image');
            displayedImage.src = imageArray[2]; // Change this to the desired image
            // Reset the click counts after displaying the image
            button1ClickCount = 0;
            button2ClickCount = 0;
        }
    }

    if (buttonId === 'button4') {
        resetClickCounts();
        resetClickedButtons();
    }
}

function resetClickCounts() {
    // Reset click counts
    button1ClickCount = 0;
    button2ClickCount = 0;
}
clickedButtons.push(buttonId);


function resetClickedButtons() {
    // Reset clicked buttons array
    clickedButtons = [];
}


