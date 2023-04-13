import React, {useState} from "react";
import Company from "../types/Company";
import ProductsList from "../components/organisms/productsList";
import Header from "../components/organisms/navHeader";

interface ProductsProps {
    company:Company
}

const Products: React.FC<ProductsProps> = ({company}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = company?.products?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={'page-container'}>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {
                company ? <ProductsList filteredProducts={filteredProducts}/> : <></>
            }
        </div>
    )
}

export default Products;
