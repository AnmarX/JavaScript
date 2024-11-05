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
    const [color, setColor] = useState("green")


    // =========
    // 1- every re-render it will update, any thing that re-render the update will happened
    // useEffect(() => {
    //     document.title = `count ${count}`
    // })
    // =========



    // =========
    // 2- it will only update once when mouting, it will happen once
    // useEffect(() => {
    //     document.title = `My counter app`
    // }, [])
    // =========



    // =========
    // 3- it will only update once when mouting and the value updating, the code will not excute if the value didn't change
    useEffect(() => {
        document.title = `count ${count} ${color}`
    }, [count])
    // =========


    const addCount = () => {
        setCount(c => c + 1)
    }

    const subCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green")
    }

    return <>
        <p style={{ color: color }}>count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button><br />
        <button onClick={changeColor}>Change color</button>

    </>
}

export default useEffectFun