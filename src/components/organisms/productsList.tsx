import React, {useEffect, useState} from "react";
import Company from "../../types/Company";
import CompanyActions from "../../actions/companyActions";
import SearchHeaderList from "../molecules/SearchHeaderList";
import CompanyItemCard from "../molecules/CompanyItemCard";
import Product from "../../types/Product";
import ProductsItemCard from "../molecules/ProductItemCard";
import {useParams} from "react-router-dom";

interface ProductsListProps {
    products: Product[],
    companies: Company[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products , companies}) => {
    const params = useParams();
    const [company, setCompany] = useState<Company>();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (params.companyId){
            setCompany(companies.find( c => c.id === params.companyId));
        }
    })

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
