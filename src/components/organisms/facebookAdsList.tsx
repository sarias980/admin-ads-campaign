import Product from "../../types/Product";
import {useNavigate} from "react-router-dom";
import ItemButton from "../atoms/Button";
import FacebookAdMockup from "../molecules/FacebookAdMockup";
import Company from "../../types/Company";

interface FacebookAdsListProps {
    company: Company,
    product: Product
}

const FacebookAdsList = (props: FacebookAdsListProps) => {
    const navigate = useNavigate();

    const openCreateAd = () => {
        if (props.product) {
            navigate("/" + encodeURIComponent(props.product.productName) + "/ads/create");
        }
    };

    return (
        <div className={'facebook-ads-container'}>
            <div className={'facebook-ads-header'}>
                <h3>
                    {props?.product?.productName} - Facebook Ads
                </h3>
                <ItemButton text={'Create new'} onClick={openCreateAd}/>
            </div>
            <div className={'facebook-ads-list'}>
                {
                    props?.product?.facebookAds?.length > 0 ? props?.product.facebookAds.map((ad, index) => (
                        <div className={'facebook-ads-item'}>
                            <div className={'facebook-ads-item-options'}>
                                <ItemButton text={'✎ Edit'} onClick={()=>{}} size={"small"}/>
                                <ItemButton text={'✖ Delete'} onClick={()=>{}} size={"small"} color={"danger"}/>
                            </div>
                            <FacebookAdMockup key={index} img={ad.img} headline={ad.headline}
                                              description={ad.description} cta={ad.cta} product={props.product}
                                              company={props.company}/>
                        </div>
                    )) : <h4>No ads at the moment...</h4>
                }

            </div>
        </div>
    )
}

export default FacebookAdsList;
