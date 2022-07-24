import { makeAutoObservable, action, observable } from "mobx";
import Item from "../models/Item";

export default class CardStore {

  items: Item[];
  count: number;

  constructor() {
    makeAutoObservable(this);
    this.items = [];
    this.count = 0;
  }

  setProducts = (products: Item[]) => {
    this.items = products;
  }

  setCount = (count: number) => {
    this.count = count;
  };

  readItem(id: number) {
    return this.items.find((item: Item) => item.id === id);
  };
}