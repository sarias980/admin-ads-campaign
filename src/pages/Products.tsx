import Reflux from "reflux";
import ProductsList from "../components/organisms/productsList";
import ProductsStore from "../store/productsStore";

class Companies extends Reflux.Component {
    constructor(props: any) {
        super(props);
        this.state = {}; // <- note that we can still use normal state
        this.stores = [ProductsStore];
    }

    render() {
        return (
            <div className={'page-container'}>
                <ProductsList products={this.state.products}></ProductsList>
            </div>
        )
    }
}

export default Companies;
