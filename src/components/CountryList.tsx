import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styles/Container'
import {
  CountryListItem,
  CountryListStyle,
  CountryListHeading,
  CountryListContent,
  CountryContentTitle,
  CountryContentDetailItem,
  CountryListItemImage,
} from '../styles/CountryList'
import FilterCountries from './FilterCountries'
import { Country, GlobalContext } from './GlobalContext'
import { Loading } from './Loading'

function CountryList() {
  const { countries, countryName, region } = useContext(GlobalContext)

  const filteredCountriesByName = (allCountries: Country[]) => {
    return allCountries.filter((country) =>
      country.name?.common?.toLocaleLowerCase().includes(countryName.toLocaleLowerCase())
    )
  }

  const filteredByRegion = (allCountries: Country[]) => {
    return allCountries.filter((country) =>
      country.region?.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    )
  }

  const filteredCountries = filteredByRegion(filteredCountriesByName(countries))

  return (
    <Container data-testid='wrapper'>
      <FilterCountries />
      <Loading />
      <CountryListStyle data-testid='country-list'>
        {filteredCountries.map((country) => (
          <CountryListItem data-testid='country-item' key={country.numericCode}>
            <Link to={`/country/${country.alpha3Code}`}>
              <CountryListItemImage
                src={country.flags?.png}
                alt={`${country.name?.common} flag`}
              />
              <CountryListHeading data-testid='country-title'>
                {country.name?.common}
              </CountryListHeading>
              <CountryListContent data-testid='country-content'>
                <CountryContentTitle data-testid='country-population'>
                  Population:
                  <CountryContentDetailItem>
                    {' '}
                    {country.population}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle data-testid='country-region'>
                  Region:
                  <CountryContentDetailItem>
                    {' '}
                    {country.region}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle data-testid='country-capital'>
                  Capital:
                  <CountryContentDetailItem>
                    {' '}
                    {country.capital}
                  </CountryContentDetailItem>
                </CountryContentTitle>
              </CountryListContent>
            </Link>
          </CountryListItem>
        ))}
      </CountryListStyle>
    </Container>
  )
}

export default CountryList
