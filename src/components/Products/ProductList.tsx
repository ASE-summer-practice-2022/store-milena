import React, {useContext} from 'react';
import ProductItem from './ProductItem';
import "../../styles/buttonAdd.scss";
import Context, {TodoContextType} from '../../context/context';

function ProductList() {

    const {newCRUD} = useContext(Context) as TodoContextType;

    return (
        <nav className="product-filter">
            <section className="products">
            {newCRUD.toDoList.map((todo: any) => {
                return (
                    <ProductItem todo={todo} />
                )
            })}
            </section>
        </nav>
    );
};

export default ProductList;