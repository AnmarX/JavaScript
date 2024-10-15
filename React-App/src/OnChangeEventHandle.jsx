import React, { useState } from "react"

const onChangeHandler = () => {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState("")
    const [payment, setPyament] = useState("")
    const [shipping, setShipping] = useState("")





    const handleNameChange = (event) => {
        // const inputElement = document.querySelector("input"); // Directly get input element
        // setName(inputElement.value); // Update state
        setName(event.target.value)
        console.log(event)

    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePyamentChange = (event) => {
        setPyament(event.target.value)
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }


    return <div>
        <input value={name} type="text" onChange={(event) => handleNameChange(event)} />
        <p>name: {name}</p>


        <input value={quantity} type="number" onChange={(event) => handleQuantityChange(event)} />
        <p>number: {quantity}</p>


        <textarea value={comment} onChange={(event) => handleCommentChange(event)} placeholder="Enter Delivery instrucations"></textarea>
        <p>Comment {comment}</p>


        <select value={payment} onChange={(event) => handlePyamentChange(event)}>
            <option value="">Select option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment with: {payment}</p>


        <div className="form-check">
            <label className="form-check-label" >
                {/* If this radio button is selected, event.target.value will return "Pick up". */}
                <input className="form-check-input" type="radio" value="Pick up"
                    // onChange={(event) => handleShippingChange(event)}: When this radio button is clicked, 
                    // it triggers the handleShippingChange function, passing the event object to it. This function will update the shipping state.
                    onChange={(event) => handleShippingChange(event)}
                    // If shipping === "Pick up", this radio button will be checked (selected). Otherwise, it will be unchecked.
                    checked={shipping === "Pick up"}
                />
                Pick up
            </label>
        </div>
        <div className="form-check">
            <label className="form-check-label" >
                <input className="form-check-input" type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={(event) => handleShippingChange(event)} />
                Delivery
            </label>
        </div>

        <p>Shipping: {shipping}</p>


    </div>

}

export default onChangeHandler




// 1- Component Initialization:
// 	React initializes the component with the state: const [quantity, setQuantity] = useState("");.
// 	The initial value of quantity is an empty string (""), and this value is displayed in the input field.
// 2- User Enters Input:
//  When the user types a number in the input field, the onChange event is triggered.
// 	handleQuantityChange is called, and the event object (with event.target.value) is passed to the function.
// 3- State Update:
// 	Inside handleQuantityChange, the value typed by the user is retrieved (event.target.value) and passed to setQuantity, which updates the quantity state.
// 	For example, if the user types 5, setQuantity("5") updates the state to 5.
// 4- React Re-render:
// 	After the state update, React re-renders the component with the updated quantity state.
// 	During re-rendering, the input’s value={quantity} is updated with the new state value (5), so the input field shows the number 5.
// 5- Displaying the Updated State:
// 	The new state value is displayed in the <p> element: Current quantity: 5.