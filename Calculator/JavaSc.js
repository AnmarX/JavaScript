const display = document.getElementById("display")
const operatros=["+","-","/","*"]

// const appendToDisplay = (input) => {
//     display.value += input;

// }


const clearDisplay = () => {
    display.value = ""
}


const calculate = () => {
    try {
        display.value = eval(display.value)

    }
    catch (error) {
        display.value="Error"
    }
}


const handleinput=(input)=>{
    let currentValue=display.value
    const lastIndexCurrentValue=currentValue.slice(-1)
    
    // Check if the input is an operator
    if (operatros.includes(input)){
        // If the last character is already an operator, do nothing
        if(operatros.includes(lastIndexCurrentValue)){
            return
        }
        
    }

    display.value+=input

}