import axios from "axios";

export const getCoins = () => {
    const endpoint = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    const API_KEY = "6444c59b-2c79-479f-8a56-3b630b8b3340";

    return axios.get(endpoint, {
        headers: {
            'X-CMC_PRO_API_KEY': API_KEY
        }
    })
        .then(response => response.data.data)
        .catch(err => console.error(err))
}