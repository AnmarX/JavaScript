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
        // console.log(buttonText)

        switch (buttonText) {
            case "W".toUpperCase():
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "a".toUpperCase():
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "s".toUpperCase():
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "d".toUpperCase():
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j".toUpperCase():
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k".toUpperCase():
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l".toUpperCase():
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            default:
                
        }


      


        // alert(`Button ${index + 1} clicked!`);
    });
});



// for (let i=0;i < buttonsLength;i++) {
//     buttons[i].addEventListener("click", () => {
//         this.innerHTML
//         alert(`button clicked index ${i} `);

//     })

// }






