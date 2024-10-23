import axios from 'axios';

const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${OPEN_WEATHER_API_KEY}`;
const iconUrl = 'https://openweathermap.org/img/wn';

const getAllCountries = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then(response => response.data);
};

const getWeatherForecast = (lat, lon) => {
  const request = axios.get(`${weatherUrl}&lat=${lat}&lon=${lon}`);
  return request.then(response => response.data);
};

export default {
  getAllCountries,
  getWeatherForecast,
  iconUrl,
};
