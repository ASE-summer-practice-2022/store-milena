import React, {useContext} from 'react';
import ProductItem from '../CardStore/CardItem';
import "../../styles/buttonAdd.scss";
import Context, {CardStoreContextType} from '../../context/context';

const ProductList = ( ) => {

    const {newCRUD} = useContext(Context) as CardStoreContextType;

    return (
        <nav className="product-filter">
            <section className="products">
            {newCRUD.CardStore.map((card: any) => {
                return (
                    <ProductItem card={card} />
                )
            })}
            </section>
        </nav>
    )
}

export { ProductList };