export {};

export interface Weather {
  current?: ICurrentWeather;
  daily?: DailyWeatherInfo[];
}

export interface ICurrentWeather {
  clouds?: number;
  feels_like?: number;
  dt?: number;
  humidity?: number;
  pressure?: number;
  sunrise?: number;
  sunset?: number;
  temp?: number;
  visibility?: number;
  wind_deg?: number;
  wind_speed?: number;
  weather?: WeatherDescription[];
}

export interface WeatherDescription {
  description?: string;
  icon?: string;
  main?: string;
}

export interface FeelsLikeInfo {
  day?: number;
  eve?: number;
  morn?: number;
  night?: number;
}

export interface TempInfo {
  day?: number;
  eve?: number;
  max?: number;
  min?: number;
  morn?: number;
  night?: number;
}

export interface DailyWeatherInfo {
  clouds?: number;
  dt?: number;
  humidity?: number;
  pressure?: number;
  sunrise?: number;
  sunset?: number;
  wind_deg?: number;
  wind_speed?: number;
  feels_like?: FeelsLikeInfo;
  temp?: TempInfo;
  weather?: WeatherDescription;
}
