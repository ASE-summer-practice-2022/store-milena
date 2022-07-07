import React, {useContext} from 'react';
import "../../styles/buttonDelete.scss";
import Context, {TodoContextType} from "../../context/context";


const ToDo = ({todo}: any) => {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (

        <div className="d-flex justify-content-center row list-group-item col-xs-2">
            <div className="list-group-item col-xs-2" style={{textDecoration: todo.complete ? "line-through" : ""}}
                 onClick={() => newCRUD.updateTask(todo.id)}>
                {todo.task}
            </div>
            <div className="wrapper list-group-item col-xs-2">
                <a onClick={() => newCRUD.deleteTask(todo.id)}><span>delete</span></a>
            </div>
        </div>
    );
};

export default ToDo;