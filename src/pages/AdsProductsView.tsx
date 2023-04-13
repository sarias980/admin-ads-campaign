import React from "react";
import Product from "../types/Product";
import FacebookAdsList from "../components/organisms/facebookAdsList";
import Header from "../components/organisms/navHeader";

interface AdsProductsViewProps {
    product: Product
}

const AdsProductsView: React.FC<AdsProductsViewProps> = ({product}) => {

    return (
        <div className={'page-container'}>
            <Header/>
            <FacebookAdsList product={product}/>
        </div>
    )
}

export default AdsProductsView;
