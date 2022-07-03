import React, {useState} from 'react';
import "../../styles/buttonAdd.scss";


function AddTodo ({ addTask }:any) {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        addTask(taskName);
        setTaskName("");

    }

    return (
        <>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form__input"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    placeholder="Add a new task"
                />
            </form>
        </>
    );

}
export default AddTodo;
