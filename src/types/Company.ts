import Product from "./Product";

export default class Company {
    constructor(logo: string, name: string, products: Product[]) {
        this.logo = logo;
        this.name = name;
        this.products = products;
    }

    logo: string;
    name: string;
    products: Product[];
}
