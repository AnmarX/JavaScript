// useState()= re-render the compnent when the state value changes

// useRef()= does not cause re-render when its value changes when you want a component
// to remember some info, but you dont want that info to trigger new renders

// USES
// 1 - Accessing / interacting with DOM Elements
// 2 - Handling foucs, animation and trransitions
// 3 - managing timers and intervals

import React, { useEffect, useState, useRef } from 'react';

const UseRef = () => {

    // let [number, setNumber] = useState(0)
    const refInput1 = useRef(null)
    const refInput2 = useRef(null)
    const refInput3 = useRef(null)


    useEffect(() => {
        console.log("re-render")
        // will return an object of current
        console.log(refInput1)
    })

    const handleClick1 = () => {
        refInput1.current.focus()
        refInput1.current.style.backgroundColor = "yellow"
        refInput2.current.style.backgroundColor = ""
        refInput3.current.style.backgroundColor = ""


    }

    const handleClick2 = () => {
        refInput2.current.focus()
        refInput1.current.style.backgroundColor = ""
        refInput2.current.style.backgroundColor = "yellow"
        refInput3.current.style.backgroundColor = ""

    }

    const handleClick3 = () => {
        refInput3.current.focus()
        refInput1.current.style.backgroundColor = ""
        refInput2.current.style.backgroundColor = ""
        refInput3.current.style.backgroundColor = "yellow"

    }

    return <div>
        <button onClick={handleClick1}>
            click me 1!
        </button>
        <input ref={refInput1} />

        <button onClick={handleClick2}>
            click me 2!
        </button>
        <input ref={refInput2} />

        <button onClick={handleClick3}>
            click me 3!
        </button>
        <input ref={refInput3} />
    </div>

}

export default UseRef
