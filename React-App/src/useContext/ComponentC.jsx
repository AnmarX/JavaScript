import './style/index.css'
import ComponentD from './ComponentD'

import React, { useContext } from "react"
import { UserContext } from './ComponentA.jsx'


const ComponentC = () => {

    const user = useContext(UserContext)

    return <div className="box">
        <h1>ComponentC</h1>
        <h2>{`hello again ${user}`}</h2>
        <ComponentD />

    </div>
}

export default ComponentC