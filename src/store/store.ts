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
        console.log('Add facebookAd...', facebookAd);
        const { product, company, companies } = this.state;
        if (facebookAd && product){
            console.log(product)
            product.facebookAds ? product.facebookAds.push(facebookAd) : product.facebookAds = [facebookAd];
            this.setState({ product: product });

            /*
            product.facebookAds = facebookAds;
            this.setState({ product: product });

            const productObject = company.products.find((p) => p.productName === product.productName)

            if (productObject){
                productObject.facebookAds = facebookAds;
                this.setState({ company: company });
            }


            const companyObject = companies.find((c) => c.id === company.id)

            if (companyObject){
                companyObject.products = company.products;
                this.setState({ companies: companies });
            }*/
        }

    };
}

export default AdminStore;
