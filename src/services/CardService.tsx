import CardStore from "../stores/CardStore";
import NetworkService from "./NetworkService";


export default class CardService {
    cardStore: CardStore;
    networkService: NetworkService;

    constructor(cardStore: CardStore, networkService: NetworkService) {
        this.cardStore = cardStore;
        this.networkService = networkService;
    }
    async setCardStore() {
        const url = process.env.URL;
        const body = JSON.stringify({ offset:0, limit:50 });
        const type = 'POST';

        const {data} = await this.networkService.fetch(url!, body, type);
        this.cardStore.setProducts(data.products);
    };
}