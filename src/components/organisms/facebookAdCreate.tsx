import {useEffect, useState} from "react";
import FacebookAd, {CTA} from "../../types/FacebookAd";
import {useNavigate} from "react-router-dom";
import FacebookAdMockup from "../molecules/FacebookAdMockup";
import Company from "../../types/Company";
import Product from "../../types/Product";
import checkAdData from "../../utils/checkAdData";
import Action from "../../actions/actions";
import {toast} from "react-toastify";
import {generateUniqueId} from "../../utils/parseJsonData";
import CreateOrUpdateFacebookAdForm from "../molecules/createFacebookAdForm";
import Actions from "../../actions/actions";

interface FacebookAdCreateProps {
    company: Company;
    product: Product;
    ad?: FacebookAd;
}

const FacebookAdCreate = (props: FacebookAdCreateProps) => {
    const navigate = useNavigate();
    const [img, setImg] = useState<string[]>([]);
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');
    const [cta, setCta] = useState<CTA>(CTA.DOWNLOAD);

    const handleSubmit = () => {
        if (checkAdData(img, headline, description, cta)) {
            const newAd = new FacebookAd(props?.ad?.id ? props.ad.id: generateUniqueId(), img, headline, description, cta);
            if (props.ad){
                Actions.updateFacebookAd(newAd)
            } else {
                Action.updateProductAddFacebookAd(newAd)
            }
            successAction();
        } else (
            errorAction()
        )
    };

    const successAction = () => {
        toast.success('Advertisement created correctly! :)');
        navigate(-1)
    }

    const errorAction = () => {
        toast.error('Advertisement created correctly! :)');
    }

    useEffect(() => {
        if (props.ad){
            setImg(props.ad.img);
            setHeadline(props.ad.headline);
            setDescription(props.ad.description);
            setCta(props.ad.cta);
        }
    }, [props.ad])

    return (
        <div className="create-ad-container">
            <div className={'create-ad-mockup-container'}>
                <FacebookAdMockup company={props.company} product={props.product} img={img} headline={headline}
                                  description={description} cta={cta}/>
            </div>
            <CreateOrUpdateFacebookAdForm company={props.company} product={props.product} img={img} headline={headline}
                                          description={description} cta={cta} setDescription={setDescription}
                                          setHeadline={setHeadline} handleSubmit={handleSubmit}
                                          setCta={setCta} setImg={setImg}/>
        </div>
    );
}

export default FacebookAdCreate;
