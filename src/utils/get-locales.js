import { getCountries, getCountryByName } from 'node-countries'
import { getCountryByNameOrShortName } from 'node-countries'

// https://www.npmjs.com/package/node-countries
// returns the list of provinces of a country
// works with both full name and short name
// enhanced by node-countries

export const getCountriesAll = () => {
  return getCountries().filter(c => (c.provinces?.length > 0)).map(c => ({ id: c.alpha2, name: c.name }));
}

export const getProvincesByName = (country) => {
  return getCountryByNameOrShortName(country, true)?.
    provinces?.map(p => ({ id: p.name, name: p.name })) || []
}

export const getCountryByShort = (short) => {
  return getCountryByNameOrShortName(short, true);
}
