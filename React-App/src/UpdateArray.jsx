import React, { useState } from "react"


const updateArray = () => {

    const [foods, setFoods] = useState(["apple", "orange", "banana", "beach", "coconut"])
    const [selectedFood, setSelectedFood] = useState("")

    // this can be done in two ways 
    // First one
    const handleAddFood = () => {
        //this or
        // const newFood = document.getElementById("foodInput").value
        // document.getElementById("foodInput").value = ""
        // console.log(newFood)

        // this is not safe update because if their is more than one setter it will only take the last one
        // setFoods([...foods, selectedFood])

        // or this
        console.log(selectedFood)
        setFoods(f => [...f, selectedFood])
        setSelectedFood("")

    }

    // this can be done in two ways
    //Second one
    const selectedFoods = (event) => {
        setSelectedFood(s => s = event.target.value)

    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))

    }

    return <div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} style={{ cursor: "pointer" }} >{food}</li>)}
        </ul>
        <p>the added food: {selectedFood}</p>
        <input value={selectedFood} type="text" id="foodInput" placeholder="Enter Food Name" onChange={selectedFoods} />
        <button onClick={handleAddFood}>Add Food</button>
    </div>

}


export default updateArray