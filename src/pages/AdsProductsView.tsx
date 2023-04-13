import React from "react";
import Product from "../types/Product";
import FacebookAdsList from "../components/organisms/facebookAdsList";
import Header from "../components/organisms/navHeader";
import Company from "../types/Company";

interface AdsProductsViewProps {
    company:Company,
    product: Product
}

const AdsProductsView: React.FC<AdsProductsViewProps> = ({product, company}) => {

    return (
        <div className={'page-container'}>
            <Header/>
            <FacebookAdsList product={product} company={company}/>
        </div>
    )
}

export default AdsProductsView;
