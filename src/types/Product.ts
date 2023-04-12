export default class Product {
    constructor(name: string, description: string, img: string, price: number) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
    }

    name: string;
    description: string;
    img: string;
    price: number
}
