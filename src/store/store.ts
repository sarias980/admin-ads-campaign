import Reflux from 'reflux';
import ProductActions from '../actions/productActions';
import FacebookAdsActions from '../actions/facebookAdsActions';
import Product  from '../types/Product';
import FacebookAd from '../types/FacebookAd';
import Company from "../types/Company";
import CompanyActions from "../actions/companyActions";

interface AdminState {
    companies: Company[];
    facebookAds: FacebookAd[];
}

class AdminStore extends Reflux.Store {
    state: AdminState = {
        companies: [],
        facebookAds: [],
    };

    constructor() {
        super();
        this.listenTo(CompanyActions.addCompany, this.onAddCompany);
        this.listenTo(FacebookAdsActions.addFacebookAd, this.onAddFacebookAd);
    }

    onAddCompany = (company: Company) => {
        const { companies } = this.state;
        this.setState({ products: [...companies, company] });
    };

    onAddFacebookAd = (facebookAd: FacebookAd) => {
        const { facebookAds } = this.state;
        this.setState({ facebookAds: [...facebookAds, facebookAd] });
    };
}

export default AdminStore;
