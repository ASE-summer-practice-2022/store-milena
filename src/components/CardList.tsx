import React from "react";
import "../styles/buttonAdd.scss";
import {inject, observer} from "mobx-react";
import CardItem from "./CardItem";
import Item from "../models/Item";
import {storeNames} from "../stores/Enum";
import Header from "../components/system/Header";

const CardList = inject(storeNames.CardStoreName)(observer((Items: any) => {
    const cardStore = Items.CardStore;
    const products = cardStore.items;

  return (
      <>
        <Header/>
          <nav className="product-filter">
              <section className="products">
                  { products.map((product: Item) => {
                    return ( <CardItem product={product}/>
                      )
                  })}
              </section>
          </nav>
      </>
  )
}));

export default CardList;
