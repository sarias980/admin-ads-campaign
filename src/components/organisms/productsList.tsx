import React, {useEffect, useState} from "react";
import Company from "../../types/Company";

import SearchHeaderList from "../molecules/SearchHeaderList";
import ProductsItemCard from "../molecules/ProductItemCard";

interface ProductsListProps {
    company: Company
}

const ProductsList: React.FC<ProductsListProps> = ({ company }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = company?.products?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div>
        <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className={'card-detail-list-container'}>
            <h2>{company?.name}</h2>
            {
                filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                    <ProductsItemCard key={product.productName} product={product}/>
                )) : <h2>No data... :(</h2>
            }
        </div>

    </div>
}

export default ProductsList;
