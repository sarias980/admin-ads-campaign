import Reflux from "reflux";
import ProductsList from "../components/organisms/productsList";
import ProductsStore from "../store/productsStore";
import AdminStore from "../store/store";

class Products extends Reflux.Component {
    constructor(props: any) {
        super(props);
        this.stores = [ProductsStore, AdminStore];
    }

    render() {
        return (
            <div className={'page-container'}>
                <ProductsList products={this.state.products} companies={this.state.companies}/>
            </div>
        )
    }
}

export default Products;
