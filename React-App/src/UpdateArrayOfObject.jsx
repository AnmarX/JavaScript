import React, { useState } from "react"

const ArrayOfObject = () => {


    const [car, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {
        const newCar = { year: carYear, make: carMake, model: carModel }
        setCars(c => [...c, newCar])
        setCarMake("")
        setCarModel("")

    }

    const handleRemoveCar = (index) => {

    }

    const handleYearChange = (event) => {
        setCarYear(event.target.value)
    }

    const handleMakeChange = (event) => {
        setCarMake(event.target.value)

    }

    const handleModelChange = (event) => {
        setCarModel(event.target.value)

    }


    return <>
        <div>
            <h2>List of cars objects</h2>
            <ul>

            </ul>
            {/* if you want to make a field readonly just remove the onchange and put the value from react state */}
            <input type="number" value={carYear} onChange={handleYearChange} /> <br />

            <input type="text" value={carMake} onChange={handleMakeChange}
                placeholder="Enter Car make" /><br />

            <input type="text" value={carModel} onChange={handleModelChange}
                placeholder="Enter Car Model" /><br />

            <button onClick={handleAddCar}>Add Car</button>


        </div>

    </>
}

export default ArrayOfObject