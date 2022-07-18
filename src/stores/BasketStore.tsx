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

    @action setProducts = (products: any) => {
        this.items = products.map((product: Item) => new Item(product));
    };

    @action addProducts = (array: any[]) => {
        const newProducts = array.map((product: Item) => new Item(product));
        this.products = [...this.products, ...newProducts];
    };

    @action deleteProduct = (id: number) => {
        let indexItems = this.products.findIndex((e: any, i: number, a: object) => e.id === id);
        this.products.splice(indexItems, 1);
    };
}