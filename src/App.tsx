import React from 'react';
import data from "./data/data.json";
import { Provider } from 'mobx-react';
import './styles/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import JsonData from './data/data.json';
import './styles/App.scss';

//components
import Header from "./components/system/Header";
import CardList from "./components/CardList";
import CardStore from "./stores/CardStore";


function App() {
  const { products } = JsonData.data;

  const cardStore = new CardStore();
  cardStore.setProducts(products);

  const stores = {
    'CardStore': cardStore
  };

  return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
          <Header />
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
