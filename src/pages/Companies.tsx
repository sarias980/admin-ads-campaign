import CompaniesList from "../components/organisms/companiesList";
import React from "react";
import Company from "../types/Company";

interface CompaniesProps {
    companies: Company[]
}

const Companies: React.FC<CompaniesProps> = ({companies}) => {

    return (
        <div className={'page-container'}>
            <CompaniesList companies={companies}/>
        </div>
    )
}

export default Companies;
