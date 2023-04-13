import React from "react";
import Company from "../../types/Company";
import Header from "../organisms/navHeader";

interface SearchHeaderListProps {
    searchTerm: string;
    setSearchTerm: Function;
}

const SearchHeaderList: React.FC<SearchHeaderListProps> = ({searchTerm, setSearchTerm}) => {

    return(
            <div className={'filter-header'}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
    )
}

export default SearchHeaderList;
