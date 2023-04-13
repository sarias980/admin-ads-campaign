import {Routes, Route} from 'react-router-dom';
import AdminStore from "../store/store";
import Reflux from "reflux";
import Companies from "../pages/Companies";
import Products from "../pages/Products";
import AdsProductsView from "../pages/AdsProductsView";
import CreateAd from "../pages/CreateAd";

class AppNavigation extends Reflux.Component {

    constructor(props: any)
    {
        super(props);
        this.state = {}; // <- note that we can still use normal state
        this.stores = [AdminStore];
    }

    render()
    {
        return (
            <Routes>
                <Route path='/' element={<Companies companies={this.state.companies}/>}/>
                <Route path='/:companyId/products' element={<Products company={this.state.company}/>}/>
                <Route path='/:productId/ads' element={<AdsProductsView company={this.state.company} product={this.state.product}/>}/>
                <Route path='/:productId/ads/create' element={<CreateAd company={this.state.company} product={this.state.product}/>}/>
            </Routes>
        )
    }
}

export default AppNavigation;
