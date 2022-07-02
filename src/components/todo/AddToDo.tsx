import React, {useState} from 'react';

function AddTodo ({ addTask }:any) {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        addTask(taskName)
    }

    return (
        <>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    placeholder="Add a new task"
                />
            </form>
        </>
    );

}
export default AddTodo;
