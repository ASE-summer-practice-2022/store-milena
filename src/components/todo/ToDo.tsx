import React, {useContext} from 'react';
import "../../styles/buttonDelete.scss";
import Context, {TodoContextType} from "../../context/context";


const ToDo = ({todo}: any) => {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (

        <div className="products clearfix">
            <div className="product-wrapper">
                <div className="product">
                    {/*PHOTO*/}
                    <div className="product-photo">
                        <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg"></img>
                    </div>

                    {/*DESCRIPTION*/}
                    <div style={{textDecoration: todo.complete ? "line-through" : ""}}
                     onClick={() => newCRUD.updateTask(todo.id)}>
                        <p>{todo.task}</p>
                    </div>

                    {/*BUTTON*/}

                </div>
            </div>
        </div>
    );
};

export default ToDo;