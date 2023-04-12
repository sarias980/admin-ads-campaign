import Reflux from 'reflux';
import FacebookAdsActions from '../actions/facebookAdsActions';
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
        this.listenTo(CompanyActions.addCompanies, this.onAddCompanies);
        this.listenTo(CompanyActions.getCompany, this.onGetCompany);
    }

    onAddCompany = (company: Company) => {
        console.log('Add companies...', company)
        const { companies } = this.state;
        this.setState({ companies: [...companies, company] });
    };

    onAddCompanies = (companies: Company[]) => {
        console.log('Add companies...', companies)
        this.setState({ companies: companies });
    };

    onGetCompany = () => {
        console.log('Get companies...')
        const { companies } = this.state;
        return companies;
    };

    onAddFacebookAd = (facebookAd: FacebookAd) => {
        const { facebookAds } = this.state;
        this.setState({ facebookAds: [...facebookAds, facebookAd] });
    };
}

export default AdminStore;
