import React, {useContext, useState} from 'react';
import Context, {TodoContextType} from "../../context/context";


function AddTodo () {
    const [taskName, setTaskName] = useState("");

    const {newCRUD} = useContext(Context) as TodoContextType;

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        newCRUD.addTask(taskName);
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
