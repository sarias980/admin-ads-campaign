import CompaniesList from "../components/organisms/companiesList";
import React, {useState} from "react";
import Company from "../types/Company";
import Header from "../components/organisms/navHeader";

interface CompaniesProps {
    companies: Company[]
}

const Companies: React.FC<CompaniesProps> = ({companies}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCompanies = companies?.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={'page-container'}>
            <Header goBack={false} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CompaniesList filteredCompanies={filteredCompanies}/>
        </div>
    )
}

export default Companies;
