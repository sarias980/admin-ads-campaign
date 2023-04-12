import React from "react";
import Company from "../types/Company";
import ProductsList from "../components/organisms/productsList";

interface ProductsProps {
    company:Company
}

const Products: React.FC<ProductsProps> = ({company}) => {
    return (
        <div className={'page-container'}>
            {
                company ? <ProductsList company={company}/> : <></>
            }
        </div>
    )
}

export default Products;
