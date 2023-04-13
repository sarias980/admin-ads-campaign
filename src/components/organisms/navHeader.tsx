import React from 'react';
import {useNavigate} from 'react-router-dom';
import SearchHeaderList from "../molecules/SearchHeaderList";

interface HeaderProps {
    goBack?: boolean;
    searchTerm?: string;
    setSearchTerm?: Function;
}

const Header: React.FC<HeaderProps> = ({goBack = true, searchTerm, setSearchTerm}) => {
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    };

    return (
        <div className={setSearchTerm ? 'header header-complex': 'header header-simple'}>
            {
                searchTerm !== undefined && setSearchTerm && <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            }
            {goBack && <button className={'back-button'} onClick={handleGoBack}>↩</button>}

        </div>
    );
};

export default Header;
