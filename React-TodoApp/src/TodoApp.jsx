import { useState } from 'react'
import './style/ToDo_CSS.css'


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    const handleInputChange = (event) => {
        setNewTasks(event.target.value)
    }

    const addTask = () => {

        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks])
            setNewTasks("")
        }
    }

    const deleteTask = (index) => {
        const updatTheTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatTheTasks)

    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTASKS = [...tasks];
            [updatedTASKS[index], updatedTASKS[index - 1]] = [updatedTASKS[index - 1], updatedTASKS[index]]
            setTasks(updatedTASKS)

        }

    }

    const moveTaskDown = (index) => {

        if (index < tasks.length - 1) {
            const updatedTASKS = [...tasks];
            [updatedTASKS[index], updatedTASKS[index + 1]] = [updatedTASKS[index + 1], updatedTASKS[index]]
            setTasks(updatedTASKS)

        }

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

                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">
                                {task}
                            </span>
                            <button className='delete-button'
                                onClick={() => deleteTask(index)} >
                                Delete
                            </button>
                            <button className='move-button'
                                onClick={() => moveTaskUp(index)} >
                                👆
                            </button>
                            <button className='move-button'
                                onClick={() => moveTaskDown(index)} >
                                👇
                            </button>
                        </li>)}
                </ol>
            </div>


        </div>

    </>
}

export default TodoApp