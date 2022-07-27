import {makeAutoObservable} from "mobx";

export default class AppStore {

    userInfo: any;
    loggedIn: boolean;

    constructor() {
        makeAutoObservable(this);
        this.loggedIn = false;
    }

    logIn() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }

    setUserInfo(userInfo: any) {
        this.userInfo = userInfo;
    }
}