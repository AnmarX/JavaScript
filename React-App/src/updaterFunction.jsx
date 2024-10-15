import React, { useState } from "react"

const UpdateFunction = () => {


    const [count, setCount] = useState(0);


    const updater_function = () => {
        // this when you click it one time it will return 2 with single click
        setCount(c => c + 1)
        setCount(c => c + 1)

        // this will not work twice when you click the button one time it will return 1
        // setCount(count + 1)
        // setCount(count + 1)


    }

    return <div>
        <p>count :{count}</p>
        <button className="btn btn-primary" onClick={() => updater_function()} type="submit">Increment🐠</button>
        <hr />


    </div>

}

export default UpdateFunction





