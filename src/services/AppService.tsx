import NetworkService from "@services/NetworkService";
import UserStore from "@stores/UserStore";

export default class UserService {
    private networkService: NetworkService;
    private userStore: UserStore;

    constructor(networkService: NetworkService, userStore: UserStore) {
        this.networkService = networkService;
        this.userStore = userStore;
    }

    async getUsers() {
        const { data } = await this.networkService.fetch({ alias: 'user', type: 'GET' });
        console.log(data);
        this.userStore.setUsers(data);
    }
}
