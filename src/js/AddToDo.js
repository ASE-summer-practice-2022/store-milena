import React, {useState} from 'react';

function AddTodo ({ addTask }) {
    const [task_name, change_taskname] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTask(task_name)
    }

    return (
        <>
            <br></br>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={task_name}
                onChange={e => change_taskname(e.target.value)}
                placeholder="Add a new task"
            />
        </form>
        </>
    );

}
export default AddTodo;
