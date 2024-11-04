// useEffect = react hook that tells react to do some code when
//     1 - this component re - render
//     2 - this component mount
//     3 - the state of a value changes


// 1 - userEffect(() => { })       //runs after every re-render
// 2 - userEffect(() => { }, [])   //runs only on mount
// 3 - userEffect(() => { }, [value]) //runs on mount + when value changes

// *uses*
// 1 - event listener
// 2 - dom manipulation
// 3 - susbrcption(real time update)
// 4 - fetch data from API
// 5 - clean up when a component unmounts



import React, { useState, useEffect } from "react"


const useEffectFun = () => {

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(c => c + 1)
    }

    return <>
        <p>count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>
}

export default useEffectFun