import React from "react";
import Company from "../../types/Company";

interface SearchHeaderListProps {
    searchTerm: string;
    setSearchTerm: Function;
}

const SearchHeaderList: React.FC<SearchHeaderListProps> = ({searchTerm, setSearchTerm}) => {

    return(
        <header>
            <div className={'filter-header'}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </header>
    )
}

export default SearchHeaderList;
