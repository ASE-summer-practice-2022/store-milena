import React, {useEffect, useState}  from "react";
import {inject, observer} from "mobx-react";
import CardItem from "./CardItem";
import Item from "../models/Item";
import {storeNames} from "../stores/Enum";
import {Grid, Pagination} from "@mui/material";
import {serviceNames} from "../services/Enum";

const CardList = inject(storeNames.CardStoreName, serviceNames.CardServiceName)(observer((props: any) => {
    const [page, setPage] = useState(1);
    const paginationCount = 12;
    const pagesCount = Math.ceil(props.CardStore.count / paginationCount);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        props.CardService.setCardStore((page - 1) * paginationCount, paginationCount);
    }, [page]);

    return (
          <div>
              <Grid container spacing={2} maxWidth="95%" margin="auto"> {
                  props.CardStore.items.map((item: Item) =>
                      <Grid item xs={3} key={item.id}>
                          <CardItem item={item}/>
                      </Grid>
                  )
              }
              </Grid>
              <Pagination
                  count={pagesCount}
                  page={page}
                  onChange={handleChange}
                  sx={{ display: "flex", justifyContent: "center", margin: "2em" }}
                  color="secondary"
                  showFirstButton
                  showLastButton/>
          </div>
      )
}));

export default CardList;
