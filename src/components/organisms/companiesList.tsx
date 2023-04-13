import React, {useState} from "react";
import Company from "../../types/Company";
import SearchHeaderList from "../molecules/SearchHeaderList";
import CompanyItemCard from "../molecules/CompanyItemCard";

interface Props {
    filteredCompanies: Company[];
}

const CompaniesList: React.FC<Props> = ({ filteredCompanies }) => {


    return <div>
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
