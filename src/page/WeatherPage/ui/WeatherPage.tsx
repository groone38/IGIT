import { AxiosError } from "axios";
import api from "entities/api/variables";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import cls from "./Weather.module.scss";

const WeatherPage = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
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
            label: "Steps",
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

  return (
    <div className={cls.wrapper}>{!loading && <Line data={chartData} />}</div>
  );
};

export default WeatherPage;
