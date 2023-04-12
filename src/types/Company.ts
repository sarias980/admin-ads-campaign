import Product from "./Product";
import {v4 as uuidv4} from 'uuid';

export default class Company {
    constructor(logo: string, name: string, products: Product[], id?: string) {
        this.id = id ? id : uuidv4();
        this.logo = logo;
        this.name = name;
        this.products = products;
    }

    id: string;
    logo: string;
    name: string;
    products: Product[];
}
