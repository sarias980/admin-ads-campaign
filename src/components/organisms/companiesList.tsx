import React, {useEffect, useState} from "react";
import Company from "../../types/Company";
import CompanyActions from "../../actions/companyActions";
import SearchHeaderList from "../molecules/SearchHeaderList";
import CompanyItemCard from "../molecules/CompanyItemCard";

interface Props {
    companies: Company[];
}

const CompaniesList: React.FC<Props> = ({ companies }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCompanies = companies?.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div>
        <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className={'card-list-container'}>
            {
                filteredCompanies?.length > 0 ? filteredCompanies.map((company) => (
                    <CompanyItemCard key={company.name} company={company}/>
                )) : <h2>No data... :(</h2>
            }
        </div>

    </div>
}

export default CompaniesList;
