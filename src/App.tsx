import React from 'react';
import { Provider } from 'mobx-react';
import { storeNames } from "./stores/Enum";
//data
import data from "./data/data.json";
import JsonData from './data/data.json';
//styles and themes
import './styles/App.scss';
import './styles/App.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme } from './styles/theme/DarkTheme';
//components
import Header from "./components/system/Header";
import CardList from "./components/CardList";
import CardStore from "./stores/CardStore";

function App() {
    const {products} = JsonData.data;
    const cardStore = new CardStore();
    cardStore.setProducts(products);

    const stores = {
        [storeNames.CardStoreName]: cardStore,
    };

  return (
      <Provider {...stores}>
          <div className="App">
              <ThemeProvider theme={darkTheme}>
                <Header />
              </ThemeProvider>
          </div>
      </Provider>
  );
}

export default App;
