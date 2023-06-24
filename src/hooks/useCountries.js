import { useEffect, useState } from 'react';

const COUNTRIES_API = 'https://api.npoint.io/3323a10daeb21be2a44a';

export default function useCountries () {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response);
    });
  }, []);

  const getCountries = async () => {
    const response = await fetch(COUNTRIES_API);
    const json = await response.json();
    return json.countries;
  };

  return { countries };
}
