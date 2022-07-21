export default class AppStore {
    token: string;

    constructor() {
        this.token = localStorage.getItem('token') as string;
    }
}