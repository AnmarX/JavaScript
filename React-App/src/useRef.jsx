// useState()= re-render the compnent when the state value changes

// useRef()= does not cause re-render when its value changes when you want a component
// to remember some info, but you dont want that info to trigger new renders

// USES
// 1 - Accessing / interacting with DOM Elements
// 2 - Handling foucs, animation and trransitions
// 3 - managing timers and intervals

import React, { useEffect, useState, useRef } from 'react';

const UseRef = () => {

    let [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("re-render")
    })

    const handleClick = () => {
        setNumber(n => n + 1)

    }

    return <>
        <button onClick={handleClick}>
            click me!
        </button>
    </>
}

export default UseRef
