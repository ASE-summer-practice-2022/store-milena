import React from 'react';
import "../../styles/buttonDelete.scss";

//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductItem = ({todo}: any) => {

    return (
            <div className="product-card">
                    {/*DESCRIPTION*/}
                    <div className="product-info" onClick={() => ''}>
                        <p className="todoName">{todo.name}</p>
                        <p className="todoSubstance">Действующее вещество:</p>
                        <p className="todoSubstanceName">{todo.substance.name}</p>
                        <img src={todo.image} width='120px' height='120px'/>
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
