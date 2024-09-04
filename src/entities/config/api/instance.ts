import axios from "axios";

export const apiWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const apiAuth = axios.create({
  // Так как я бек не пишу, тут у нас запросы на бек по авторизации/регистрации
  baseURL: "https://api.igitbackendauth/",
});

export const apiClient = axios.create({
  // Тут подразумевается что будут запросы для авторизованных
  baseURL: "https://api.igitbackendclient/",
});

// Интерсептор для авторизованных
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
