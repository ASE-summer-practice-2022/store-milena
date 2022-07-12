import React, {useContext} from 'react';
import ToDo from './ToDo';
import AddTodo from "./AddToDo";
import "../../styles/buttonAdd.scss";
import Context, {TodoContextType} from '../../context/context';

function ToDoList() {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (
        <div>
            {newCRUD.toDoList.map((todo: any) => {
                return (
                    <ToDo todo={todo} updateTask={newCRUD.updateTask}  deleteTask={newCRUD.deleteTask}/>
                )
            })}
            <AddTodo/>
        </div>
    );
};

export default ToDoList;