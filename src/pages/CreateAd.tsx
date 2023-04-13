import React from "react";
import Product from "../types/Product";
import FacebookAdCreate from "../components/organisms/facebookAdCreate";
import Company from "../types/Company";
import Header from "../components/organisms/navHeader";

interface CreateAdProps {
    product: Product;
    company: Company;
}

const CreateAd: React.FC<CreateAdProps> = ({product, company}) => {
    return (
        <div className={'page-container'}>
            <Header/>
            {
                product ? <FacebookAdCreate product={product} company={company}/> : <></>
            }
        </div>
    )
}
export default CreateAd;
