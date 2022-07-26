import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from "@/components/CardList";
import Basket from "@pages/Basket";
import ItemPage from "@pages/ItemPage";
import { BrowserRouter } from 'react-router-dom';
import Page from "@pages/Page";
import Login from "@pages/Login";

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
                        <Route path="/Login" element={this.withHeader(Login)} />
                        <Route path="/ItemPage/:id" element={this.withHeader(ItemPage)} />
                    </Routes>
                </BrowserRouter>
        );
    }
}

export default RoutesPaths;
