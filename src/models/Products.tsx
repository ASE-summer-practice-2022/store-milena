import {v4 as uuidv4} from "uuid";

export default class ProductItem {
    id: string;
    name: string;
    substanceId: string;
    substance?: {
        name: string,
        id: string,
        code: string,
    };

    constructor(text: string) {
        this.id = uuidv4();
        this.name = text;
        this.substanceId = text;
    }
}