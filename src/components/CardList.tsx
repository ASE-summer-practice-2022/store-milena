import React, {useEffect, useState}  from "react";
import "../styles/buttonAdd.scss";
import {inject, observer} from "mobx-react";
import CardItem from "./CardItem";
import Item from "../models/Item";
import {storeNames} from "../stores/Enum";
import Pagination from '@mui/material/Pagination';
import NetworkService from "../services/NetworkService";
import {serviceNames} from "../services/Enum";
import CardService from "../services/CardService";

const CardList = inject(storeNames.CardStoreName, serviceNames.CardServiceName)(observer((Items: any) => {
    const [page, setPage] = useState(1);
    const paginationCount = 10;
    const pagesCount = Math.ceil(50 / paginationCount);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        Items.CardService.setCardStore((page - 1) * paginationCount, paginationCount);
    }, [page]);

    return (
          <>
              <nav className="product-filter">
                  <section className="products">
                      { Items.CardStore.items.map((product: Item) => {
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
                  color="secondary"
                  showFirstButton
                  showLastButton/>
          </>
      )
}));

export default CardList;
