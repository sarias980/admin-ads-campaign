import React from "react";
import Company from "../../types/Company";

interface CompanyItemCardProps {
    company: Company;
}

const CompanyItemCard: React.FC<CompanyItemCardProps> = ({company}) => {

    return (
        <div className="company-card">
            <img src={company.logo} alt={company.name}/>
            <h2>{company.name}</h2>
        </div>
    )
}

export default CompanyItemCard
