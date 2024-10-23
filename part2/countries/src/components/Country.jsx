import rc from '../services/restcountries';
import { useState, useEffect } from 'react';

const Country = ({ country }) => {
  const [lat, lon] = country.capitalInfo.latlng;
  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState('');
  useEffect(() => {
    rc.getWeatherForecast(lat, lon).then(data => {
      setTemperature(data.main.temp);
      setWind(data.wind.speed);
      setIcon(data.weather[0].icon);
    });
  }, []);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital: {country.capital.join(', ')} </div>
      <div>area: {country.area.toLocaleString()} </div>
      <div>
        <h3>languages:</h3>
        <ul>
          {Object.entries(country.languages).map(([k, v]) => (
            <li key={k}>{v}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      {temperature && (
        <div>
          <div>temperature: {temperature} Celcius</div>
          <div>
            <img src={`${rc.iconUrl}/${icon}@2x.png`}></img>
          </div>
          <div>wind: {wind} m/s</div>
        </div>
      )}
    </div>
  );
};

export default Country;
