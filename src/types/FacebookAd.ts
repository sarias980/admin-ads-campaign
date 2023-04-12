export default class FacebookAd {
    constructor(img: string[], headline: string, description: string, cta: string) {
        this.img = img;
        this.headline = headline;
        this.description = description;
        this.cta = cta;
    }

    img: string[];
    headline: string;
    description: string;
    cta: string;
}
