import {CTA} from "../types/FacebookAd";

export default function checkAdData(img: string[], headline: string, description: string, cta: CTA) {
    if (img?.length < 1){
        return false;
    }
    return !(!headline || !description || !cta);


}
