import React, { useState } from "react"

const UseState = () => {

    const names = ["", "Guest", "nmr", "John", "Alice", "Bob"];  // Array of names

    const [nameIndex, setNameIndex] = useState(0)
    const [age, setAge] = useState(0);
    const [isEmpoyyed, setEmployyed] = useState(false)
    const [name, setName] = useState("Guest")


    const udpateName = () => {
        setName("nemo")
    }


    const update_Name_Age_EMP = () => {
        const nextIndex = (nameIndex + 1) % names.length;  // Ensure it loops back to the beginning
        setNameIndex(nextIndex)
        setAge(age + 1)
        setEmployyed(!isEmpoyyed)

    }

    return <div>
        <p>Name: {names[nameIndex]} &nbsp; Age:{age} &nbsp; Is employyed? {isEmpoyyed ? "yes" : "no"}</p>
        <button className="btn btn-primary" onClick={() => update_Name_Age_EMP()} type="submit">Set Name & age & Emp 🐠</button>
        <hr />

        <p>Name:{name}</p>
        <button className="btn btn-primary" onClick={() => udpateName()} type="submit">Set Name 🐠</button>
    </div>

}

export default UseState





/* ================================== object
const people = [
    { name: "", age: 0 },
    { name: "Guest", age: 25 },
    { name: "nmr", age: 30 },
    { name: "John", age: 35 },
    { name: "Alice", age: 28 },
    { name: "Bob", age: 40 }
];

// State to track the index of the current person
const [personIndex, setPersonIndex] = useState(0);

const update_Name_Age = () => {
    // Increment index and loop back to the start using modulo
    const nextIndex = (personIndex + 1) % people.length;
    setPersonIndex(nextIndex);
};

return (
    <div>
        <p>Name: {people[personIndex].name} &nbsp; Age: {people[personIndex].age}</p>
        <button className="btn btn-primary" onClick={update_Name_Age} type="submit">
            Set Name 🐠
        </button>
    </div>
);
==================================*/