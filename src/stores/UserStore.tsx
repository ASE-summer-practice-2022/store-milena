import { action, makeObservable, observable } from 'mobx';
//
// export default class UserStore {
//     @observable user: any | null = null;
//     @observable isLogin = false;
//
//     constructor() {
//         makeObservable(this);
//     }
//
//     @action setUser = (obj: any, isLogin: boolean) => {
//         this.user = obj;
//         this.isLogin = isLogin;
//     };
// }