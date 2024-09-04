import { api } from "entities/config/api/instance";
import { IWeatherList } from "entities/types/weather/weatherType";

const API_KEY = "38b7b42d3a3767d1618fd582ddb56e01";

class WeatherService {
  getWeather(lat: number, lon: number) {
    return api.get<{ list: IWeatherList[] }>(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
  }
}

export default WeatherService;
