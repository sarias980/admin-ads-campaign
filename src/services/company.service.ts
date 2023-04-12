import jsonData from '../utils/shop_data.json'
export async function getCompanyInfoAndProducts() {
    //const json = await fetch('');
    const json = jsonData;

    if(json){
        try {
            //return json.json();
            return json;
        } catch (e) {
            console.error('Error parsing json in company.service: ',e);
        }
    } else {
        console.error('Error getting the json in company.service');
    }
}
