import Reflux from 'reflux';
import FacebookAd from '../types/FacebookAd';
import Company from "../types/Company";
import CompanyActions from "../actions/companyActions";
import Product from "../types/Product";

interface AdminState {
    companies: Company[];
    company: Company | undefined;
    product: Product | undefined;
    facebookAds: FacebookAd[];
}

class AdminStore extends Reflux.Store {
    state: AdminState = {
        company: undefined,
        companies: [],
        product: undefined,
        facebookAds: []
    };

    constructor() {
        super();
        this.listenTo(CompanyActions.addCompany, this.onAddCompany);
        this.listenTo(CompanyActions.addCompanies, this.onAddCompanies);
        this.listenTo(CompanyActions.addProduct, this.onAddProduct);
    }

    onAddCompany = (company: Company) => {
        console.log('Add company...', company)
        this.setState({ company: company });
    };

    onAddCompanies = (companies: Company[]) => {
        console.log('Add companies...', companies)
        this.setState({ companies: companies });
    };

    onAddProduct = (product: Product) => {
        console.log('Add product...', product);
        this.setState({ product: product });
    };

    onAddFacebookAd = (facebookAd: FacebookAd) => {
        const { facebookAds } = this.state;
        this.setState({ facebookAds: [...facebookAds, facebookAd] });
    };
}

export default AdminStore;
