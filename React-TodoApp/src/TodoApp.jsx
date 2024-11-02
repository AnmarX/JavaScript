import { useState } from 'react'


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    const handleInputChange = (event) => {
        setNewTasks(event.target.value)
    }

    const addTask = () => {

    }

    const deleteTask = () => {

    }

    const moveTaskUp = () => {

    }

    const moveTaskDown = () => {

    }



    return <>
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder='enter a task...'
                    value={newTasks}
                    onChange={handleInputChange}
                />
                <button
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>


        </div>

    </>
}

export default TodoApp