import React, {useState} from "react";
import Product from "../../types/Product";
import Paragraph from "../atoms/Paragraph";
import {useNavigate} from "react-router-dom";
import CompanyActions from "../../actions/companyActions";

interface ProductsItemCardProps {
    product: Product;
}

const ProductsItemCard: React.FC<ProductsItemCardProps> = ({product}) => {
    const navigate = useNavigate();

    const navToProductsAds = () => {
        if (product){
            CompanyActions.addProduct(product);
            navigate("/" + encodeURIComponent(product.productName) + "/ads");
        }
    };

    return (
        <div className="product-card" onClick={() => navToProductsAds()}>
            <div className="product-card-info">
                <img src={product.productImage} alt={product.productName}/>
                <div className="product-card-info-detail">
                    <h2>{product.productName}</h2>
                    <Paragraph maxLines={3} text={product.productDescription}/>
                    <h4>{product.price} €</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductsItemCard
