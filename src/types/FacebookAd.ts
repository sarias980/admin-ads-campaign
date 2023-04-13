export enum CTA {
    NO_BUTTON= 'No button',
    APPLY_NOW= 'Apply now',
    BOOK_NOW= 'Book now',
    CALL_NOW= 'Call now',
    CONTACT_US= 'Contact us',
    DONATE_NOW= 'Donate now',
    DOWNLOAD= 'Download',
    GET_ACCESS= 'Get access',
    GET_OFFER= 'Get offer',
    GET_QUOTE= 'Get quote',
    GET_SHOWTIMES= 'Get showtimes',
    LEARN_MORE= 'Learn more',
    LISTED_NOW= 'Listen now',
    ORDER_NOW= 'Order now',
    PLAY_GAME= 'Play game',
    REQUEST_TIME= 'Request time',
    SEE_MENU= 'See menu',
    SEND_MESSAGE= 'Send message',
    SHOP_NOW= 'Shop now',
    SIGN_UP= 'Sign up',
    SUBSCRIBE= 'Subscribe',
    WATCH_MORE= 'Watch more'
};

export default class FacebookAd {
    constructor(img: string[], headline: string, description: string, cta: CTA) {
        this.img = img;
        this.headline = headline;
        this.description = description;
        this.cta = cta ? cta : CTA.DOWNLOAD;
    }

    img: string[];
    headline: string;
    description: string;
    cta: CTA;
}
