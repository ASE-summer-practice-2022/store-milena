import React from 'react';
import { Provider } from 'mobx-react';
import { storeNames } from "./stores/Enum";
//data
import JsonData from './data/data.json';
//styles and themes
import './styles/App.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './styles/theme/Theme';
//components
import CardStore from "./stores/CardStore";
import RoutesPaths from "./route";
import Header from "./components/system/Header";


function App() {
    const {products} = JsonData.data;
    const cardStore = new CardStore();
    cardStore.setProducts(products);

    const stores = {
        [storeNames.CardStoreName]: cardStore,
    };

  return (
      <ThemeProvider theme={theme}>
          <Provider {...stores}>
                      <div className="App">
                          <RoutesPaths/>
                      </div>
          </Provider>
      </ThemeProvider>
  );
}

export default App;
