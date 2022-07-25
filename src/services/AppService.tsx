import UserStore from "@stores/UserStore";
// import NetworkService from "@services/NetworkService"
//
// export default class AppService {
//     private networkService: NetworkService;
//     private userStore: UserStore;
//
//     constructor(networkService: NetworkService, userStore: UserStore) {
//         this.networkService = networkService;
//         this.userStore = userStore;
//     }
//
//     async login(email: string, password: string) {
//         this.loaderStore.setLoader(true);
//         const {data} = await this.networkService.fetch({alias: 'user/login', parameters: {email, password}});
//         if (!data) {
//             alert('Неверный логин или пороль');
//             return;
//         };
//         const {token} = data;
//         this.networkService.setToken(token);
//         localStorage.setItem('token', token);
//         this.loaderStore.setLoader(false);
//     }
// }