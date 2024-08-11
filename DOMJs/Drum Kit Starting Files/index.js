// document.querySelectorAll(".AllButtons .drum").addEventListener("click",handleClick)

// const handleClick = () => {
//    alert("hello")
//    console.log("nemo")
// }


// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         alert(`Button ${index + 1} clicked!`);
//     });
// });


const buttons = document.querySelectorAll(".AllButtons .drum")

const buttonsLength = document.querySelectorAll(".AllButtons .drum").length


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        var buttonText = button.lastElementChild.innerHTML
        makeSound(buttonText.toLowerCase())

    });
});



document.addEventListener('keypress', (event) => {
    makeSound(event["key"].toLowerCase())
})


const makeSound = (key) => {
    switch (key) {
        case "w".toLowerCase():
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a".toLowerCase():
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "s".toLowerCase():
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d".toLowerCase():
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j".toLowerCase():
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k".toLowerCase():
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l".toLowerCase():
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

    }
}

// for (let i=0;i < buttonsLength;i++) {
//     buttons[i].addEventListener("click", () => {
//         this.innerHTML
//         alert(`button clicked index ${i} `);

//     })

// }






