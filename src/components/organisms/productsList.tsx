import React from "react";

import ProductsItemCard from "../molecules/ProductItemCard";

import Product from "../../types/Product";


interface ProductsListProps {
    filteredProducts: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({filteredProducts}) => {

    return (
        <div>
            <div className={'card-detail-list-container'}>
                {
                    filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                        <ProductsItemCard key={product.productName} product={product}/>
                    )) : <h2>No data... :(</h2>
                }
            </div>

        </div>)
}

export default ProductsList;
