// Define Audio objects
let audioKick = new Audio("sounds/kick-bass.mp3");
let audioCrash = new Audio("sounds/crash.mp3");
let audioSnare = new Audio("sounds/snare.mp3");
let audioTom1 = new Audio("sounds/tom-1.mp3");
let audioTom2 = new Audio("sounds/tom-2.mp3");
let audioTom3 = new Audio("sounds/tom-3.mp3");
let audioTom4 = new Audio("sounds/tom-4.mp3");

// Get all the drum buttons
let buttonList = document.querySelectorAll(".set button")

//Get which key was pressed and play the respective sound
buttonList.forEach(element => {
    document.addEventListener("keydown", function(event) {
        const buttonKey = event.key;

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
    })
});
