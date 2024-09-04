export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IWeatherList {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: Date;
  main: IMain;
  pop: number;
  rain?: Record<string, number>;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}
