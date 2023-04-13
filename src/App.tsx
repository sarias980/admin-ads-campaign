import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {getCompanyInfoAndProducts} from "./services/company.service";
import Actions from "./actions/actions";
import AppNavigation from "./navigations/app-navigation";
import Preloader from '../src/components/molecules/Preloader';

import './App.css';
import './style/style.css';
import {parseCompaniesJsonData} from "./utils/parseJsonData";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        getCompanyInfoAndProducts().then(json => {
            if (json){
                const parseData = parseCompaniesJsonData(json);
                Actions.addCompanies([parseData]);
            }
        })
    }, []);


    return (
        <div className="App">
            <Router>
                <Preloader load={load}/>
                <div className="App">
                    <AppNavigation/>
                </div>
            </Router>
        </div>
    );
}

export default App;
