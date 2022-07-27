import React from 'react';
import { Provider } from 'mobx-react';
import { storeNames } from "@stores/Enum";
import { serviceNames } from "@services/Enum";
//styles and themes
import '@styles/App.scss';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@styles/theme/Theme';
//components
import CardStore from "@stores/CardStore";
import RoutesPaths from "@/route";
import NetworkService from "@services/NetworkService";
import CardService from "@services/CardService";
import AppService from "@services/AppService";
import BasketStore from "@stores/BasketStore";
import AppStore from "@stores/AppStore";


function App() {
    const cardStore = new CardStore();
    const basketStore = new BasketStore();
    const appStore = new AppStore();

    const endpoint = process.env.REACT_APP_ENDPOINT as string;
    
    const networkService = new NetworkService(endpoint);
    const cardService = new CardService(cardStore, networkService);
    const appService = new AppService(appStore, networkService);

    const stores = {
        [storeNames.CardStoreName]: cardStore,
        [storeNames.BasketStoreName]: basketStore,
        [storeNames.AppStoreName]: appStore,
    };
    
    const services = {
        [serviceNames.NetworkServiceName]: networkService,
        [serviceNames.CardServiceName]: cardService,
        [serviceNames.AppServiceName]: appService,
    };

  return (
      <ThemeProvider theme={theme}>
          <Provider {...stores} {...services}>
              <RoutesPaths/>
          </Provider>
      </ThemeProvider>
  );
}

export default App;
