// useContext()= react hook that allow you to share values between mutiple
// level of components without passing props through each level


// PROVIDER COMPONENT
// 1 - import React, { createContext } from "react"
// 2 - export const UserContext = createContext()
// 3 - <MyContext.Provider value={value}>
//         <Child />
//     </MyContext.Provider>


//CONSUMER COMPONENTS
// 1 - import React, { createContext } from "react"
// 2 - import {MyContext} from './ComponentA.jsx'
// 3 - const value =UserContext(MyContext)

import './style/index.css'

import React, { useState, createContext } from "react"

export const UserContext = createContext()

import ComponentBB from './ComponentBB.jsx'

const ComponentA = () => {

    const [user, setUser] = useState("Nemo")

    return <div className="box">
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentBB />
        </UserContext.Provider>

    </div>
}

export default ComponentA