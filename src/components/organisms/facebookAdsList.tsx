import Product from "../../types/Product";
import {useNavigate} from "react-router-dom";
import ItemButton from "../atoms/Button";
import FacebookAdMockup from "../molecules/FacebookAdMockup";
import Company from "../../types/Company";
import {useState} from "react";
import DeleteModalConfirm from "../molecules/DeleteModalConfirm";
import FacebookAd from "../../types/FacebookAd";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Actions from "../../actions/actions";

interface FacebookAdsListProps {
    company: Company,
    product: Product
}

const FacebookAdsList = (props: FacebookAdsListProps) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [adToDelete, setAdToDelete] = useState<FacebookAd>();

    const openCreateAd = () => {
        if (props.product) {
            navigate(`/${encodeURIComponent(props.product.productName)}/ads/create`);
        }
    };

    const handleUpdate = (ad: FacebookAd) => {
        if (props.product && ad) {
            Actions.addFacebookAd(ad);
            navigate(`/${encodeURIComponent(props.product.productName)}/ads/${ad.id}/update`);
        }
    };

    const handleDelete = (ad: FacebookAd) => {
        setAdToDelete(ad);
        setShowModal(true);
    };

    const handleConfirm = () => {
        Actions.deleteFacebookAd(adToDelete);
        setShowModal(false);
        toast.success('Ad deleted successfully');
    };

    const handleCancel = () => {
        setShowModal(false);
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
                        <div className={'facebook-ads-item'} key={index}>
                            <div className={'facebook-ads-item-options'}>
                                <ItemButton text={'✎ Edit'} onClick={() => handleUpdate(ad)} size={"small"}/>
                                <ItemButton text={'✖ Delete'} onClick={() => handleDelete(ad)} size={"small"}
                                            color={"danger"}/>
                            </div>
                            <FacebookAdMockup img={ad.img} headline={ad.headline}
                                              description={ad.description} cta={ad.cta} product={props.product}
                                              company={props.company}/>
                        </div>
                    )) : <h4>No ads at the moment...</h4>
                }
                {showModal && (
                    <DeleteModalConfirm
                        message="Are you sure you want to delete this ad?"
                        confirm={handleConfirm}
                        cancel={handleCancel}
                    />
                )}

            </div>
        </div>
    )
}

export default FacebookAdsList;
