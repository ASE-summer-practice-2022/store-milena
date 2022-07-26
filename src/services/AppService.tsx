import AppStore from "@stores/AppStore";
import NetworkService from "./NetworkService";

export default class ItemService {
    appStore: AppStore;

    networkService: NetworkService;

    constructor(appStore: AppStore, networkService: NetworkService) {
        this.appStore = appStore;
        this.networkService = networkService;
    }

    async login(email: string, password: string) {
        const url = 'user/login';
        const type = 'POST';
        const body = {email, password};

        const data = await this.networkService.getToken(url, body, type);

        if (!data) {
            console.log("wrong email or password");
            return;
        }

        this.appStore.logIn();
        this.networkService.setToken(data);
    };
}