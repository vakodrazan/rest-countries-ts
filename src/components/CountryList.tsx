import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styles/Container'
import {
  CountryListItem,
  CountryListStyle,
  CountryListHeading,
  CountryListContent,
  CountryListContentDetail,
  CountryListContentDetailItem,
  CountryListItemImage,
} from '../styles/CountryList'
import FilterCountries from './FilterCountries'
import { Country, GlobalContext } from './GlobalContext'
import { Loading } from './Loading'

function CountryList() {
  const { countries, countryName, region } = useContext(GlobalContext)

  const filteredCountriesByName = (allCountries: Country[]) => {
    return allCountries.filter((country) =>
      country.name
        ?.toLocaleLowerCase()
        .includes(countryName.toLocaleLowerCase())
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
                src={country.flag}
                alt={`${country.name} flag`}
              />
              <CountryListHeading data-testid='country-title'>
                {country.name}
              </CountryListHeading>
              <CountryListContent data-testid='country-content'>
                <CountryListContentDetail data-testid='country-population'>
                  Population:
                  <CountryListContentDetailItem>
                    {' '}
                    {country.population}
                  </CountryListContentDetailItem>
                </CountryListContentDetail>
                <CountryListContentDetail data-testid='country-region'>
                  Region:
                  <CountryListContentDetailItem>
                    {' '}
                    {country.region}
                  </CountryListContentDetailItem>
                </CountryListContentDetail>
                <CountryListContentDetail data-testid='country-capital'>
                  Capital:
                  <CountryListContentDetailItem>
                    {' '}
                    {country.capital}
                  </CountryListContentDetailItem>
                </CountryListContentDetail>
              </CountryListContent>
            </Link>
          </CountryListItem>
        ))}
      </CountryListStyle>
    </Container>
  )
}

export default CountryList
