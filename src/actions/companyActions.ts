import Reflux from 'reflux';

const CompanyActions = Reflux.createActions([
    'addCompany',
    'addCompanies',
    'deleteCompany',
    'updateCompany',
    'getCompany',
    'getCompanyById',
]);

export default CompanyActions;
