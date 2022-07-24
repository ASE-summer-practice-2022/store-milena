import CardStore from "../stores/CardStore";
import NetworkService from "./NetworkService";


export default class CardService {
    cardStore: CardStore;
    networkService: NetworkService;

    constructor(cardStore: CardStore, networkService: NetworkService) {
        this.cardStore = cardStore;
        this.networkService = networkService;
    }

    async setCardStore(offset: number, limit: number) {
        const url = '/api/products/part';
        const body = JSON.stringify({ offset, limit });
        const type = 'POST';

        const {data} = await this.networkService.fetch(url, body, type);
        this.cardStore.setProducts(data.products);
        this.cardStore.setCount(data.count);
    };
}