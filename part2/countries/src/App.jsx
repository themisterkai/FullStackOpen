import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import rc from './services/restcountries';

function App() {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    rc.getAllCountries().then(list => setCountries(list));
  }, []);

  const setCountryHandler = e => {
    setSelected('');
    setCountry(e.target.value);
    const list = countries.filter(country =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(list);
    // if (list.length > 10) {
    //   setError('Too many matches, specify another filter');
    // } else {
    //   setError(null);
    // }
    console.log(list, list.length);
  };

  const showCountryHandler = id => {
    setSelected(id);
  };

  return (
    <>
      <div>
        find countries <input value={country} onChange={setCountryHandler} />
      </div>
      <Countries
        filteredCountries={filtered}
        country={country}
        selected={selected}
        showCountryHandler={showCountryHandler}
      />
    </>
  );
}

export default App;
