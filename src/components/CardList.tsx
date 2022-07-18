import React, {useState} from "react";
import "../styles/buttonAdd.scss";
import {inject, observer} from "mobx-react";
import CardItem from "./CardItem";
import Item from "../models/Item";
import {storeNames} from "../stores/Enum";
import Header from "../components/system/Header";
import Pagination from '@mui/material/Pagination';

const CardList = inject(storeNames.CardStoreName)(observer((Items: any) => {
    const cardStore = Items.CardStore;
    const products = cardStore.items;
    const [page, setPage] = useState(1);

    const pagesCount = Math.ceil(products.length / 10);
    const currentItems = products.slice((page - 1) * 10, page * 10);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
      return (
          <>
            <Header/>
              <nav className="product-filter">
                  <section className="products">
                      { currentItems.map((product: Item) => {
                        return ( <CardItem product={product}/>
                          )
                      })}
                  </section>
              </nav>
              <Pagination
                  count={pagesCount}
                  page={page}
                  onChange={handleChange}
                  sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
                  showFirstButton
                  showLastButton/>
          </>
      )
}));

export default CardList;
