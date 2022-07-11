import React, {useContext} from 'react';
import "../../styles/buttonDelete.scss";
import Context, {TodoContextType} from "../../context/context";


const ToDo = ({todo}: any) => {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (

        <div>
            <table>
            <tr>
                <td><div style={{textDecoration: todo.complete ? "line-through" : ""}}
                 onClick={() => newCRUD.updateTask(todo.id)}>
                {todo.task}
            </div></td>
                    <td><div>
                <a onClick={() => newCRUD.deleteTask(todo.id)}><span>delete</span></a>
            </div></td>
            </tr>
            </table>
        </div>
    );
};

export default ToDo;