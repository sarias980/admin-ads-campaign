import Reflux from 'reflux';
import ProductActions from "../actions/productActions";
import Product from "../types/Product";

interface ProductsState {
    products: Product[];
}

class ProductsStore extends Reflux.Store {
    state: ProductsState = {
        products: [],
    };

    constructor() {
        super();
        this.listenTo(ProductActions.addProducts, this.onAddProducts);
        this.listenTo(ProductActions.getProducts, this.onGetCompany);
    }

    onAddProducts = (products: Product[]) => {
        console.log('Add products...', products)
        this.setState({ products: products });
    };

    onGetCompany = () => {
        console.log('Get products...')
        const { products } = this.state;
        return products;
    };
}

export default ProductsStore;
