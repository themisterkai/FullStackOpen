import Country from './Country';

const Countries = ({
  filteredCountries,
  country,
  selected,
  showCountryHandler,
}) => {
  if (country === '') {
    return null;
  }
  if (filteredCountries.length > 10) {
    return (
      <div className="errorMessage">
        Too many matches, specify another filter
      </div>
    );
  }
  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  }

  const countryToShow = filteredCountries.find(
    country => country.cca2 === selected
  );

  console.log(countryToShow);

  return (
    <div>
      {filteredCountries.map(country => (
        <div key={country.cca2}>
          <div>
            {country.name.common}
            <button
              onClick={() => {
                showCountryHandler(country.cca2);
              }}
            >
              show
            </button>
          </div>
        </div>
      ))}
      {countryToShow && <Country country={countryToShow} />}
    </div>
  );
};

export default Countries;
