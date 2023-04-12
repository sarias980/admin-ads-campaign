import FacebookAd from "../../types/FacebookAd";
import FacebookAdCreateModal from "../molecules/FacebookAdCreateModal";

interface FacebookAdsListProps {
    ads: FacebookAd[]
}

const FacebookAdsList = (props: FacebookAdsListProps) => {
    const handleCreateAd = (ad: FacebookAd) => {
        console.log(ad);
        // Aquí podrías enviar el objeto ad a un servidor o almacenarlo en el estado de la aplicación
    };

    return (
        <div className={'facebook-ads-container'}>
            <div className={'facebook-ads-header'}>
                <h3>
                    Facebook Ads
                </h3>
                <button>
                    Add
                </button>
            </div>
            <div className={'facebook-ads-list'}>
                {
                    props?.ads?.length > 0 ? props?.ads.map((ad) => (
                        <></>
                    )) : <h4>No ads at the moment</h4>
                }

            </div>
            <div id="portal"></div>
            <FacebookAdCreateModal onCreate={handleCreateAd}/>
        </div>
    )
}

export default FacebookAdsList;
