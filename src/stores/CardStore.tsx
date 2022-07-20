import { makeAutoObservable, action, observable } from "mobx";
import Item from "../models/Item";

export default class CardStore {

  @observable items: Item[];

  constructor() {
    makeAutoObservable(this);
    this.items = [];
  }

  @action setProducts = (products: Item[]) => {
      this.items = products;
  }

}