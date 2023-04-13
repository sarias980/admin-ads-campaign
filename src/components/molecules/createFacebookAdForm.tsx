import Company from "../../types/Company";
import Product from "../../types/Product";
import {CTA} from "../../types/FacebookAd";
import ItemInput from "../atoms/Input";
import ItemSelect from "../atoms/ItemSelect";
import ItemImageInput from "../atoms/ItemImageInput";
import ItemButton from "../atoms/Button";

interface CreateOrUpdateFacebookAdFormProps {
    company: Company;
    product: Product;
    img: string[];
    setImg: Function;
    headline: string;
    setHeadline: Function;
    description: string;
    setDescription: Function;
    cta: CTA;
    setCta: Function;
    handleSubmit: Function;
}

const CreateOrUpdateFacebookAdForm = (props: CreateOrUpdateFacebookAdFormProps) => {

    return (
        <div className="create-ad-form-content">
            <h2>Create new Facebook advertisement</h2>
            <ItemInput placeholder={'Headline'} value={props.headline} setValue={props.setHeadline}/>
            <ItemInput placeholder={'Description'} value={props.description} setValue={props.setDescription}/>
            <ItemSelect placeholder={'Call to action'} value={props.cta} setValue={props.setCta} options={Object.values(CTA)}/>
            <ItemImageInput img={props.img} setValue={(newImg: string) => props.setImg([...props.img, newImg])}/>
            <ItemButton text={'Create'} onClick={props.handleSubmit}/>
        </div>
    )
}
export default CreateOrUpdateFacebookAdForm;
