import React, { useState } from "react"


const updateObject = () => {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" })


    const handleYear = (event) => {
        // this is not safe update because if their is more than one setter it will only take the last one
        // setCar({ ...car, year: event.target.value })

        // this is safe update
        setCar(c => ({ ...c, year: event.target.value }))

    }

    const handleMake = (event) => {
        // this is not safe update
        // setCar({ ...car, make: event.target.value })

        // this is safe update
        setCar(c => ({ ...c, make: event.target.value }))

    }

    const handleChange = (event) => {
        // this is not safe update
        // setCar({ ...car, model: event.target.value })

        // this is safe update
        setCar(c => ({ ...c, model: event.target.value }))


    }

    return <div>
        <p>Your favoutite car is: {car.year} {car.make} {car.model}</p>
        {/* if you dont use onChange and you put value the input will be readonly */}
        <input type="number" value={car.year} onChange={handleYear} />
        <input type="text" value={car.make} onChange={handleMake} />
        <input type="text" value={car.model} onChange={handleChange} />

    </div>
}

export default updateObject