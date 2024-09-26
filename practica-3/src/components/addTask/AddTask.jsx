import { useState } from 'react'
import PropTypes from "prop-types"

const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

AddTask.prototype = {
    addTask : PropTypes.func.isRequired,
}

export default AddTask