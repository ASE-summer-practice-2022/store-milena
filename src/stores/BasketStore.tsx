import { action, makeObservable, observable } from 'mobx';
import Item from "../models/Item"


export default class BasketStore {
    @observable products: Item[] = [];
    @observable items: Item[];
    @observable newItem: Item[] = [];
    @observable count: number;

    constructor() {
        makeObservable(this);
        this.count = 0;
        this.items = [];
    }

    @action addProduct = (newItem: Item) => {
        this.items = [newItem, ...this.items];
    };

    @action deleteProduct = (id: number) => {
        this.items = this.items.filter(item => item.id !== id);
    };

    @action countAdd = () => {
        this.count = this.count + 1;
    };
}