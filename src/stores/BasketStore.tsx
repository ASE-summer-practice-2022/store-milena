import { action, makeObservable, observable } from 'mobx';
import Item from "../models/Item"


export default class BasketStore {
    @observable products: Item[] = [];
    items: Item[];
    newItem: Item[] = [];

    constructor() {
        makeObservable(this);
        this.items = [];
    }

    @action addProduct = (newItem: Item) => {
        this.items = [newItem, ...this.items];
    };

    @action deleteProduct = (id: number) => {
        this.items = this.items.filter(item => item.id !== id);
    };
}