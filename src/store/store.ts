import Reflux from 'reflux';
import FacebookAd from '../types/FacebookAd';
import Company from "../types/Company";
import Actions from "../actions/actions";
import Product from "../types/Product";

interface AdminState {
    companies: Company[];
    company: Company | undefined;
    product: Product | undefined;
}

class AdminStore extends Reflux.Store {
    state: AdminState = {
        company: undefined,
        companies: [],
        product: undefined
    };

    constructor() {
        super();
        this.listenTo(Actions.addCompany, this.onAddCompany);
        this.listenTo(Actions.addCompanies, this.onAddCompanies);
        this.listenTo(Actions.addProduct, this.onAddProduct);
        this.listenTo(Actions.updateProductAddFacebookAd, this.onAddFacebookAd);
        this.listenTo(Actions.deleteFacebookAd, this.onDeleteFacebookAd);
    }

    onAddCompany = (company: Company) => {
        console.log('Add company...', company)
        this.setState({company: company});
    };

    onAddCompanies = (companies: Company[]) => {
        console.log('Add companies...', companies)
        this.setState({companies: companies});
    };

    onAddProduct = (product: Product) => {
        console.log('Add product...', product);
        this.setState({product: product});
    };

    onAddFacebookAd = (facebookAd: FacebookAd) => {
        console.log('Add facebookAd...', facebookAd);
        const {product} = this.state;
        if (facebookAd && product) {
            product.facebookAds ? product.facebookAds.push(facebookAd) : product.facebookAds = [facebookAd];
            this.setState({product: product});
        }

    };

    onDeleteFacebookAd = (facebookAd: FacebookAd) => {
        console.log('Delete facebookAd...', facebookAd);
        const {product} = this.state;
        if (facebookAd && product) {
            const newList = product.facebookAds.filter((ad) => ad.id !== facebookAd.id)
            if (newList){
                product.facebookAds = newList
                this.setState({product: product});
            }
        }

    };
}

export default AdminStore;
