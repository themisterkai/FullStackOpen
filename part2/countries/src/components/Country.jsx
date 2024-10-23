const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital: {country.capital.join(', ')} </div>
      <div>area: {country.area} </div>
      <div>
        <h3>languages:</h3>
        <ul>
          {Object.entries(country.languages).map(([k, v]) => (
            <li key={k}>{v}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default Country;
