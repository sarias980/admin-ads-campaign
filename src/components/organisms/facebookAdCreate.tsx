import {useEffect, useState} from "react";
import FacebookAd, {CTA} from "../../types/FacebookAd";
import {useNavigate} from "react-router-dom";
import FacebookAdMockup from "../molecules/FacebookAdMockup";
import Company from "../../types/Company";
import Product from "../../types/Product";
import ItemInput from "../atoms/Input";
import ItemSelect from "../atoms/ItemSelect";
import ItemButton from "../atoms/Button";
import ItemImageInput from "../atoms/ItemImageInput";
import checkAdData from "../../utils/checkAdData";
import Action from "../../actions/actions";

interface FacebookAdCreateProps {
    company: Company;
    product: Product;
}

const FacebookAdCreate = (props: FacebookAdCreateProps) => {
    const navigate = useNavigate();
    const [img, setImg] = useState<string[]>([]);
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');
    const [cta, setCta] = useState<CTA>(CTA.DOWNLOAD);

    const handleSubmit = () => {
        if (checkAdData(img,headline,description,cta)){
            const newAd = new FacebookAd(img, headline, description, cta);
            Action.updateProductAddFacebookAd(newAd)
        }

        //props.onCreate(newAd);
    };

    return (
        <div className="create-ad-container">

            <div className={'create-ad-mockup-container'}>
                <FacebookAdMockup company={props.company} product={props.product} img={img} headline={headline} description={description} cta={cta}/>
            </div>
            <div className="create-ad-form-content">
                <h2>Crear anuncio de Facebook</h2>
                <ItemInput placeholder={'Headline'} value={headline} setValue={setHeadline}/>
                <ItemInput placeholder={'Description'} value={description} setValue={setDescription}/>
                <ItemSelect placeholder={'Call to action'} value={cta} setValue={setCta} options={Object.values(CTA)}/>
                <ItemImageInput img={img} setValue={(newImg:string) => setImg([...img,newImg ])}/>
                <ItemButton text={'Create'} onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default FacebookAdCreate;
