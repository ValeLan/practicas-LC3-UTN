import PropTypes from "prop-types"

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'black' }}>
                    {task.text}
                    <button onClick={() => toggleTaskCompletion(index)}>
                        {task.completed ? 'Desmarcar' : 'Completar'}
                    </button>
                    <button onClick={() => deleteTask(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleTaskCompletion: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;