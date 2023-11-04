import axios from "axios";

const apiKey = process.env.REACT_APP_RIOT_API_KEY
// console.log(apiKey)
// const requestHeader = {

// }

const baseUrl = axios.create({
    baseURL: 'https://kr.api.riotgames.com',
    // headers : requestHeader
})

export const getChallengers = async () => {
    const res = await baseUrl.get(`/tft/league/v1/challenger?api_key=${apiKey}`);
    // console.log(res)
    // throw new Error('its my fails')
    return res.data
  }