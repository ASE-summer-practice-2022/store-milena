import { makeAutoObservable, action, observable } from "mobx";
import Item from "../models/Item";

export default class CardStore {

  items: Item[];
  @observable newItem: Item[] = [];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  }

  @action
  setProducts = (products: any) => {
      this.items = products;
  }

  readItem = (id: number) => {
    return this.items.find((item: Item) => item.id === id);
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