import React from "react";
import {useNavigate} from "react-router-dom";
import Company from "../../types/Company";
import Actions from "../../actions/actions";

interface CompanyItemCardProps {
    company: Company;
}

const CompanyItemCard: React.FC<CompanyItemCardProps> = ({company}) => {
    const navigate = useNavigate();

    const setCompanyProducts = () => {
        if (company.products?.length> 0){
            Actions.addCompany(company);
            navigate("/" +company.id+"/products")
        }
    }

    return (
        <div className="company-card" onClick={() => setCompanyProducts()}>
            <img src={company.logo} alt={company.name}/>
            <h2>{company.name}</h2>
        </div>
    )
}

export default CompanyItemCard
