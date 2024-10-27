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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {  // Check if "Enter" was pressed
            handleAddCar();
        }
    };

    const handleRemoveCar = (index) => {
        setCars(car.filter((_, i) => i !== index))

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
                {car.map((car, index) =>
                    //handleRemoveCar(index) if you passed is like this it will be triggred on pageload
                    <li key={index} onClick={() => handleRemoveCar(index)} style={{ cursor: "pointer" }}>
                        {car.year} , {car.make} , {car.model}
                    </li>)}
            </ul>


            {/* if you want to make a field readonly just remove the onchange and put the value from react state */}
            <input type="number" value={carYear} onChange={handleYearChange} onKeyDown={handleKeyDown} /> <br />

            <input type="text" value={carMake} onChange={handleMakeChange} onKeyDown={handleKeyDown}
                placeholder="Enter Car make" /><br />

            <input type="text" value={carModel} onChange={handleModelChange} onKeyDown={handleKeyDown}
                placeholder="Enter Car Model" /><br />

            <button onClick={handleAddCar}>Add Car</button>


        </div>

    </>
}

export default ArrayOfObject