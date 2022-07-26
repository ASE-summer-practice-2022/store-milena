import {
    action, makeObservable, observable
} from 'mobx';
import socketClient from 'socket.io-client';


export default class AppStore {
    isLoader: boolean = true;
    private socket: any;
    readonly endpoint: string;

    constructor() {
        makeObservable(this, {
            isLoader: observable,
            setLoader: action,
        });
        this.endpoint = 'http://localhost:8080';
    }

    setLoader(value: boolean) {
        this.isLoader = value;
    }

    register(token: string) {
        this.socket = socketClient(this.endpoint, {
            query: {token},
        });
    }
}
