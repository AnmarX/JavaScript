import React, { useState } from "react";

const ButtonClickEvent = () => {
    /*
    const handleClick = () => console.log("Clicked me!!!")
    return <button className="btn btn-primary" onClick={handleClick} type="submit">Click me 🐠</button>
    */


    /*
    const handlClick2 = (name) => console.log(`${name} stop clicking me`)

    // with the below code the onclick will be invoked upon loading the page ================
    return <button className="btn btn-primary" onClick={handlClick2("nmr")} type="submit">Click me 🐠</button>

    // but this will work fine and it will work after the click ================
    return <button className="btn btn-primary" onClick={() => handlClick2("nmr")} type="submit">Click me 🐠</button>
    */


    /*
    const [disButton, setDisButton] = useState(false); // Track disabled state
    const [count, setCount] = useState(0);

    // react will not track the below it will change only on console
    // let count = 0
    const handlClick3 = (name) => {
        if (count < 3) {
            setCount(count + 1)
            console.log(`${name} you clicked me ${count} times`)
        } else {
            console.log(`${name} stop clicking me!`)
            setDisButton(true)
        }

    }

    return <>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button disabled={disButton} className="btn btn-primary" onClick={() => handlClick3("nmr")} type="submit">Click me 🐠</button>
            <h3>{count}</h3>
        </div>
    </>
    */



    const [count, setCount] = useState(0);
    // if their is another args than event it will not pass if we didnt do the below onCLick
    const handlClick4 = (event, name) => {
        const originalText = event.target.innerText
        event.target.innerText = "OuCH!!! 🤬"
        // 3000 milliseconds = 3 seconds
        setCount(count + 1)
        setTimeout(() => {
            event.target.innerText = originalText;
        }, 1000);

    }

    // FIRST event is parms (event), second event is the args of the function handlClick4(event)
    return <>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button className="btn btn-primary" onDoubleClick={(event) => handlClick4(event, "nmr")} type="submit">Click me 🐠</button>
            <h3>{count}</h3>
        </div>
    </>


}

export default ButtonClickEvent




/*
// this how passing on the ========================
const handleClick4 = (event, name) => {
  console.log(event);  // Access the event object
  console.log(name);  // Access the additional parameter
};

return (
  <button
    className="btn btn-primary"
    onClick={(event) => handleClick4(event, "nmr")}  // Pass both event and name
    type="submit"
  >
    Click me
  </button>
);
*/




/*
// you can get event like this but won't get prop of the even object ========================
// below will work only if it's only the event object========================
const handlClick4 = (event) => {

    console.log(event)
}

// FIRST event is parms (event), second event is the args of the function handlClick4(event)
return <button className="btn btn-primary" onClick={handlClick4} type="submit">Click me 🐠</button>
*/
