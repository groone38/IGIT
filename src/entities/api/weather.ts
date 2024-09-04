import { apiClient, apiWeather } from "entities/config/api/instance";
import { IWeatherList } from "entities/types/weather/weatherType";

class WeatherService {
  getWeather(lat: number, lon: number) {
    return apiWeather.get<{ list: IWeatherList[] }>(
      `forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
    );
  }

  sendWeather(weather: IWeatherList[]) {
    // Этого роута нет, просто как пример без бека, отправки погоды на бэк
    return apiClient.post(`sendWeatherData/:id`, {
      data: weather,
    });
  }
}

export default WeatherService;
