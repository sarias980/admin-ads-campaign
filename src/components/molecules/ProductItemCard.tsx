import React, {useState} from "react";
import Company from "../../types/Company";
import ProductActions from "../../actions/productActions";
import Product from "../../types/Product";
import Paragraph from "../atoms/Paragraph";

interface ProductsItemCardProps {
    product: Product;
}

const ProductsItemCard: React.FC<ProductsItemCardProps> = ({product}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="product-card">
            <div className="product-card-info" onClick={() => toggleExpand()}>
                <img src={product.productImage} alt={product.productName}/>
                <div className="product-card-info-detail">
                    <h2>{product.productName}</h2>
                    <Paragraph maxLines={3} text={product.productDescription}/>
                    <h4>{product.price} €</h4>
                </div>
            </div>
            {
                isExpanded && (
                    <div>
                        <h2>Hola</h2>
                    </div>
                )
            }
        </div>
    )
}

export default ProductsItemCard
