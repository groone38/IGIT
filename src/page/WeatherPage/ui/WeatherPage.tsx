import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import cls from "./Weather.module.scss";
import api from "entities/api/variables";
import Button from "shared/Button/Button";
import { options } from "../config/options";
import { IWeatherList } from "entities/types/weather/weatherType";
import Loader from "shared/Loader/Loader";

const WeatherPage = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [weather, setWeather] = useState<IWeatherList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await api.weatherService.getWeather(
        45.0352718,
        38.9764814
      );

      if (!data) {
        return;
      }
      setWeather(data.list);
      setChartData({
        labels: data.list.slice(0, data.list.length / 2).map((item) => {
          const time = new Date(item.dt_txt);

          return [time.getHours(), time.getMinutes()]
            .map((value) => {
              return value < 10 ? "0" + value : value;
            })
            .join(":");
        }),
        datasets: [
          {
            label: "Dataset",
            data: data.list
              .slice(0, data.list.length / 2)
              .map((item) => item.main.temp - 273),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    } catch (e) {
      throw new Error((e as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendWeather = async () => {
    setLoading(true);

    try {
      // Роут не отработает так как бэка нет, просто пример отправки погоды на сервер
      const { data } = await api.weatherService.sendWeather(weather);
      if (!data) {
        return;
      }
    } catch (e) {
      throw new Error((e as AxiosError).message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className={cls.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Line data={chartData} options={options} />
          <Button onClick={sendWeather}>Отправить погоду на Бэк</Button>
        </>
      )}
    </div>
  );
};

export default WeatherPage;
