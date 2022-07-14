export default class Item {
  id: number;
  name: string;
  substanceId: number;
  substanceName: string;
  substanceCode: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.substanceId = item.substance.id;
    this.substanceName = item.substance.name;
    this.substanceCode = item.substance.code;
  }
}
