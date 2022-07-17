import React from 'react';
import {inject, observer} from "mobx-react";
import { storeNames } from "../../stores/Enum";
import Item from "../../models/Item";

const ItemPage = inject(storeNames.CardStoreName)(observer((Items: any) => {
    const cardStore = Items.CardStore;
    const products = cardStore.items;

    return (
        <div>
            {products.map((product: Item) => (
                <Items key={product.id} product={product}/>
            ))}
        </div>
    )
}))

export default ItemPage;