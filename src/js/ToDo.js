import React from 'react';

const ToDo = ({todo, completeTask, deleteTask}) => {
    return (

        <div className="d-flex justify-content-center row">
            <div className="list-group-item col-xs-10" style={{textDecoration: todo.complete ? "line-through" : ""}}
                 onClick={() => completeTask(todo.id)}>
                {todo.task}
            </div>
            <button type="button" className="btn btn-light col-xs-2" onClick={() => deleteTask(todo.id)}>x</button>
        </div>
);
};

export default ToDo;