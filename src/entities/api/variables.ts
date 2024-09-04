import WeatherService from "./weather";

class Api {
  weatherService = new WeatherService();
}

const api = new Api();
export default api;
