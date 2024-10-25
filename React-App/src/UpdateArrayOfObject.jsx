import React, { useState } from "react"

const ArrayOfObject = () => {


    const [car, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {

    }

    const handleRemoveCar = (index) => {

    }

    const handleYearChange = (event) => {

    }

    const handleMakeChange = (event) => {

    }

    const handleModelChange = (event) => {

    }


    return <>
        <div>
            <h2>List of cars objects</h2>
            <ul>

            </ul>
        </div>

    </>
}

export default ArrayOfObject