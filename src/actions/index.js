import axios from 'axios';

const API_KEY = 'a925ea0b7671ea11750ea834eb2c95c6';
// const API_KEY = '99cb7c7e19f31c97baabef1b5aca63ce';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
