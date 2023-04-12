import React from "react";
import Product from "../types/Product";

interface AdsProductsViewProps {
    product: Product
}

const AdsProductsView: React.FC<AdsProductsViewProps> = ({product}) => {

    return (
        <div className={'page-container'}>

        </div>
    )
}

export default AdsProductsView;
