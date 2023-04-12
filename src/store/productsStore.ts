import Reflux from 'reflux';
import Products from "../pages/Products";
import ProductActions from "../actions/productActions";

interface ProductsState {
    products: Products[];
}

class ProductsStore extends Reflux.Store {
    state: ProductsState = {
        products: [],
    };

    constructor() {
        super();
        this.listenTo(ProductActions.addProducts, this.onAddProducts);
    }

    onAddProducts = (products: Products[]) => {
        console.log('Add products...', products)
        this.setState({ products: products });
    };
}

export default ProductsStore;
