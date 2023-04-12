import React, {useEffect, useState} from "react";
import Company from "../../types/Company";
import CompanyActions from "../../actions/companyActions";
import SearchHeaderList from "../molecules/SearchHeaderList";
import CompanyItemCard from "../molecules/CompanyItemCard";
import Product from "../../types/Product";
import ProductsItemCard from "../molecules/ProductItemCard";

interface ProductsListProps {
    products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return <div>
        <SearchHeaderList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className={'card-detail-list-container'}>
            {
                filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                    <ProductsItemCard key={product.productName} product={product}/>
                )) : <h2>No data... :(</h2>
            }
        </div>

    </div>
}

export default ProductsList;
