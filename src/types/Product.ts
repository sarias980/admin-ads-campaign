export default class Product {
    constructor(name: string, description: string, img: string, price: number) {
        this.productName = name;
        this.productDescription = description;
        this.productImage = img;
        this.price = price;
    }

    productName: string;
    productDescription: string;
    productImage: string;
    price: number
}
