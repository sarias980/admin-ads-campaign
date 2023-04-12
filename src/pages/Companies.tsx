import AdminStore from "../store/store";
import Reflux from "reflux";
import CompaniesList from "../components/organisms/companiesList";

class Companies extends Reflux.Component {
    constructor(props: any) {
        super(props);
        this.state = {}; // <- note that we can still use normal state
        this.stores = [AdminStore];
    }

    render() {
        return (
            <div className={'page-container'}>
                <CompaniesList companies={this.state.companies}></CompaniesList>
            </div>
        )
    }
}

export default Companies;
