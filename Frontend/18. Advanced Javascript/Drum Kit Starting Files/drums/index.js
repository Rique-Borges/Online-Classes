// Define Audio objects
let audioKick = new Audio("sounds/kick-bass.mp3");
let audioCrash = new Audio("sounds/crash.mp3");
let audioSnare = new Audio("sounds/snare.mp3");
let audioTom1 = new Audio("sounds/tom-1.mp3");
let audioTom2 = new Audio("sounds/tom-2.mp3");
let audioTom3 = new Audio("sounds/tom-3.mp3");
let audioTom4 = new Audio("sounds/tom-4.mp3");

// Get all the drum buttons
let buttonList = document.querySelectorAll(".set button");

// Function to play audio based on button key
function playSound(buttonKey) {
    switch (buttonKey) {
        case "w":
            audioKick.play();
            break;
        case "a":
            audioCrash.play();
            break;
        case "s":
            audioSnare.play();
            break;
        case "d":
            audioTom1.play();
            break;
        case "j":
            audioTom2.play();
            break;
        case "k":
            audioTom3.play();
            break;
        case "l":
            audioTom4.play();
            break;
        default:
            break;
    }
}



// Add event listener for keyboard keydown event
document.addEventListener("keydown", function(event) {
    const buttonKey = event.key;
    playSound(buttonKey);
    buttonAnimation(buttonKey);
});
// Add event listener for mouse click on each drum button
buttonList.forEach(button => {
    button.addEventListener("click", function(event) {
        const buttonKey = event.key;
        playSound(buttonKey);
        buttonAnimation(buttonKey);
    });
});
function buttonAnimation(buttonKey){
    let activeButton = document.querySelector("." + buttonKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
 }