import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CardList from "@/components/CardList";
import Basket from "@pages/Basket";
import ItemPage from "@pages/ItemPage";
import { BrowserRouter } from 'react-router-dom';
import Page from "@pages/Page";
import Login from "@pages/Login";
import AppStore from "@stores/AppStore";
import {storeNames} from "@stores/Enum";

class RoutesPaths extends React.Component {
    appStore: AppStore;
    constructor(props: any) {
        super(props);
        this.appStore = props[storeNames.AppStore]
    }

    withHeader(Component: any) {
        if (this.appStore.loggedIn) {
            return (
                <Page>
                    <Component/>
                </Page>
            );
        }
        else {
           <Navigate to="/Login" replace/>
        }
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
