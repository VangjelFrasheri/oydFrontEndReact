import axios from "axios";

const WEATHER_API_BASE_URL = "http://localhost:8081/api/v1/weather"

class WeatherApi {

    getWeekOfWeather  = () => {
        const weeklyWeatherPath = "/weekly/forcast";
        return axios.get(WEATHER_API_BASE_URL + weeklyWeatherPath);
    }
}

export default new WeatherApi;