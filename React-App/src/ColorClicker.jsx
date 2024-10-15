import React, { useState } from "react"
import './Style/CSS_ColorPicker.css'


const colorPick = () => {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorChnage = (event) => {
        setColor(event.target.value)
    }

    return <>
        <div className="color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{ background: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label>select a color: </label>
            <input type="color" value={color} onChange={handleColorChnage} />

        </div>
    </>
}

export default colorPick