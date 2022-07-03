import React from 'react';
import "../../styles/buttonDelete.scss";


const ToDo = ({todo, completeTask, deleteTask}: any) => {
    return (

        <div className="d-flex justify-content-center row list-group-item col-xs-2">
            <div className="list-group-item col-xs-2" style={{textDecoration: todo.complete ? "line-through" : ""}}
                 onClick={() => completeTask(todo.id)}>
                {todo.task}
            </div>
            <div className="wrapper list-group-item col-xs-2">
                <a onClick={() => deleteTask(todo.id)}><span>delete</span></a>
            </div>
        </div>
    );
};

export default ToDo;