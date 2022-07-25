import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from "./components/CardList";
import Basket from "./components/Pages/Basket";
import ItemPage from "./components/Pages/ItemPage";
import { BrowserRouter } from 'react-router-dom';
import Page from "./components/Pages/Page";

class RoutesPaths extends React.Component {

    withHeader(Component: any) {
        return (
                <Page>
                    <Component/>
                </Page>
        );
    }

    render() {
        return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={this.withHeader(CardList)} />
                        <Route path="/Basket" element={this.withHeader(Basket)} />
                        <Route path="/ItemPage/:id" element={this.withHeader(ItemPage)} />
                    </Routes>
                </BrowserRouter>
        );
    }
}

export default RoutesPaths;
