// function deposit(){
// }

const prompt = require("prompt-sync")();

const ROWS=3
const COLS=3

const Symbols_count={
    A:2,
    B:4,
    C:6,
    D:8
}

const SUMOB_VALUES={
    A:5,
    B:4,
    C:3,
    D:2

}



const deposit = () => {
    while(true){
        const depositAmount=prompt("Enter a deposit here: ")
        const numberDespositAmount = parseFloat(depositAmount)

        if (isNaN(numberDespositAmount) || numberDespositAmount <= 0) {
            //console.log(`Valid deposit amount: ${numberDespositAmount}`);
            console.log('This is an invalid deposit amount. Please try again.\n')
            //break; // Exit the loop
        } else {
            // the return will break the loop and return the value to the function
            return numberDespositAmount
        }
    }
}


const GertNumberOFlines=() =>{
    while(true){
        const lines=prompt("Enter the number of lines to bet on (1-3): ")
        const NumberOFlines = parseFloat(lines)

        if (isNaN(NumberOFlines) || NumberOFlines <= 0 || NumberOFlines > 3) {
            //console.log(`Valid deposit amount: ${numberDespositAmount}`);
            console.log("invalid number of lines!\n")
            //break; // Exit the loop
        } else {
            // the return will break the loop and return the value to the function
            return NumberOFlines
        }
    }
}


const getBet=(balance , lines) =>{

    while(true){
        const bet=prompt("Enter bet per line: ")
        const NumberBet = parseFloat(bet)

        if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
            //console.log(`Valid deposit amount: ${numberDespositAmount}`);
            console.log("invalid bet!\n")
            //break; // Exit the loop
        } else {
            // the return will break the loop and return the value to the function
            return NumberBet
        }
    }
}

const spin=() =>{
    const symbols=[]
    for (const [symbol,count] of Object.entries(Symbols_count)){
        for (let i =0;i<count;i++){
            symbols.push(symbol)
        }
    }
    const reels=[]
    for(let i=0;i< COLS;i++){
        reels.push([])
        const reelsymbos=[...symbols]
        for(let j =0;j < ROWS;j++){
            const randomIndex=Math.floor(Math.random()*reelsymbos.length)
            const selectSymbol=reelsymbos[randomIndex]
            reels[i].push(selectSymbol)
            reelsymbos.splice(randomIndex,1)

        }

    }
    return reels
}

const transpose=(reels)=>{
    const rows=[]
    for(let i=0;i<ROWS;i++){
        rows.push([])
        for (let j=0;j< COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const PrintRows=(rows)=>{
    for (const row of rows){
        let rowString=""
        for(const[i,symbol]of row.entries()){
            rowString+=symbol
            if(i != rows.length -1){
                rowString+=" | "
            }
        }
        console.log(rowString)
    }
}

const getWinnings=(rows,bet,lines) =>{
    let winning = 0
    for(let row =0; row < lines;row++){
        const symbols = rows[row]
        let allSame=true
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame=false
                break;
            }
        }
        if (allSame){
            winning+=bet * SUMOB_VALUES[symbols[0]]
        }
    }
    return winning
}

const game=()=>{
    let balance =deposit()
    while(true){
        console.log(`You have a balance of $${balance}`)
        const numberOflines= GertNumberOFlines()
        const bet = getBet(balance,numberOflines)
        balance-=bet * numberOflines
        const reels=spin()
        const rows=transpose(reels)
        PrintRows(rows)
        const Winnings =getWinnings(rows,bet,numberOflines)
        balance += Winnings
        console.log(`You won , $${Winnings}`)

        if (balance <=0){
            console.log("you have ran out of money")
            break;
        }
        
        const playagain=prompt("do you want to play again? (Y/N)")
        if (playagain !="y")break;
    }
}

game()




