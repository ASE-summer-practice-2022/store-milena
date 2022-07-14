import { makeAutoObservable, action, observable } from "mobx";
import Item from "../models/Item";

export default class CardStore {
  items: Item[];
  newItem: Item[] = [];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  }

  setProducts = (products: any): void => {
    this.items = products.map((product: Item) => new Item(product));
  };

  addItem(newItem: Item): void {
    let newItems = new Item(this.newItem);
    this.newItem.push(newItems);
  }

  remoteItem(index: number): void {
    newItems: Item;

    const newItems = [...this.items];
    let indexItems = this.items.findIndex((e: any, i: number, a: object) => e.id === index)
    newItems.splice(indexItems, 1);
  }

  updateItem(index: number) {
    newItems: Item;

    let newItems = new Item(this.newItem);
    let indexItems = this.items.findIndex((e: any, i: number, a: object) => e.id === index)
    this.newItem.push(newItems);
  }

}
