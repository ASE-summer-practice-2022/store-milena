import React, {useContext} from 'react';
import "../../styles/buttonDelete.scss";
import Context, {TodoContextType} from "../../context/context";

//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductItem = ({todo}: any) => {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (
            <div className="product-card">
                    {/*DESCRIPTION*/}
                    <div className="product-info" style={{textDecoration: todo.complete ? " " : ""}}
                     onClick={() => newCRUD.updateTask(todo.id)}>
                        <p className="todoName">{todo.name}</p>
                        <p className="todoSubstanceName">{todo.substance.name}</p>
                        <div className="todoImg"><img src={todo.image} width='120px' height='120px'/></div>
                    </div>

                    {/*BUTTON*/}
                <div className="product-delete">
                    <IconButton color="secondary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
            </div>
    );
};

export default ProductItem;
