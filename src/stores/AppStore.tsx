import React from "react";
import { action, makeObservable, observable } from 'mobx';
import NetworkService from "@services/NetworkService";
import LoaderStore from "@stores/LoaderStore";
import UserStore from "@stores/UserStore";

export default class AppStore {
    private networkService: NetworkService;
    private loaderStore: LoaderStore;
    private userStore: UserStore;

    constructor(networkService: NetworkService, loaderStore: LoaderStore) {
        this.networkService = networkService;
        this.loaderStore = loaderStore;
    }

    async login(email: string, password: string) {
        this.loaderStore.setLoader(true);
        const {data} = await this.networkService.fetch({alias: 'user/login', parameters: {email, password}});
        if (!data) {
            alert('Неверный логин или пароль');
            return;
        };
        const {token} = data;
        this.userStore.setToken(token);
        localStorage.setItem('token', token);
        this.loaderStore.setLoader(false);
    }

    async authentication() {
        this.loaderStore.setLoader(true);
        const {data} = await this.networkService.fetch({alias: 'user/userInfo', type: 'GET', errorHandler: err => {
                this.userStore.setUser({}, false);
                localStorage.removeItem('token');
            }
        });
        console.log(data);
        if (data) {
            this.userStore.setUser(data, true);
            this.loaderStore.register(localStorage.getItem('token'));
        } else {
            this.userStore.setUser({}, false);
            localStorage.removeItem('token');
        }
        this.loaderStore.setLoader(false);
    }
}