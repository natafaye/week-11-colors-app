
// STATE

let color = "Green"



// RENDERING

// Save a bookmark to the h1 in a variable
const colorText = document.getElementById("color-text")

function renderApp() {
    // Change the text in the h1 to match the color in state
    colorText.textContent = color

    // Depending on what color name is in state, set the background color of the body
    if(color === "Green") {
        document.body.style.backgroundColor = "#79B473"
    } else if(color === "Blue") {
        document.body.style.backgroundColor = "#34B8D0"
    } else if(color === "Purple") {
        document.body.style.backgroundColor = "#8377D1"
    }
}

// When the app first loads in, render whatever is in state to start out
renderApp()



// LISTENING

function onGreenClick() {
    // Update the state
    color = "Green"
    // Render again
    renderApp()
}

function onBlueClick() {
    // Update the state
    color = "Blue"
    // Render again
    renderApp()
}

function onPurpleClick() {
    // Update the state
    color = "Purple"
    // Render again
    renderApp()
}