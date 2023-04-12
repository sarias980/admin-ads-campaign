import React from "react";
import Company from "../../types/Company";
import ProductActions from "../../actions/productActions";
import Product from "../../types/Product";

interface ProductsItemCardProps {
    product: Product;
}

const ProductsItemCard: React.FC<ProductsItemCardProps> = ({product}) => {

    return (
        <div className="product-card" onClick={() => console.log(product)}>
            <img src={product.productImage} alt={product.productName}/>
            <h2>{product.productName}</h2>
        </div>
    )
}

export default ProductsItemCard
