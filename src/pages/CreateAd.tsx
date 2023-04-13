import React from "react";
import Product from "../types/Product";
import FacebookAdCreate from "../components/organisms/facebookAdCreate";
import Company from "../types/Company";
import Header from "../components/organisms/navHeader";
import FacebookAd from "../types/FacebookAd";

interface CreateAdProps {
    product: Product;
    company: Company;
    ad?: FacebookAd;
}

const CreateAd: React.FC<CreateAdProps> = ({product, company, ad}) => {
    return (
        <div className={'page-container'}>
            <Header/>
            {
                product ? <FacebookAdCreate product={product} company={company} ad={ad}/> : <></>
            }
        </div>
    )
}
export default CreateAd;
