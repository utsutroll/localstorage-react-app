import { useState } from 'react';

export const TaskCreator = ({ createTask, toggleTask }) => {
    const [newTaskName, setNewTaskName] = useState('')

    const handleSutmit = (e) => {
        e.preventDefault();
        createTask(newTaskName)
        localStorage.setItem('tasks', newTaskName)
        setNewTaskName('')
    }
    return (

        <form onSubmit={handleSutmit} className='my-2 row'>
            <div className='col-9'>
                <input
                    type='text'
                    placeholder="Enter a new task"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className="form-control"
                />


            </div>
            <div className='col-3'>
                <button className='btn btn-primary btn-sm'>Save task</button>
            </div>
        </form>

    )
}