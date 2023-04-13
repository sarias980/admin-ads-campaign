import React, {useState} from "react";
import Product from "../../types/Product";
import Paragraph from "../atoms/Paragraph";
import {useNavigate} from "react-router-dom";
import Actions from "../../actions/actions";

interface ProductsItemCardProps {
    product: Product;
}

const ProductsItemCard: React.FC<ProductsItemCardProps> = ({product}) => {
    const navigate = useNavigate();

    const navToProductsAds = () => {
        if (product){
            Actions.addProduct(product);
            navigate("/" + encodeURIComponent(product.productName) + "/ads");
        }
    };

    return (
        <div className="product-card" onClick={() => navToProductsAds()}>
            <div className="product-card-info">
                <img src={product.productImage} alt={product.productName}/>
                <div className="product-card-info-detail">
                    <div className="product-card-info-detail-header">
                        <h2>{product.productName}</h2> <h4>{product.price} €</h4>
                    </div>
                    <Paragraph maxLines={3} text={product.productDescription}/>

                </div>
            </div>
        </div>
    )
}

export default ProductsItemCard
