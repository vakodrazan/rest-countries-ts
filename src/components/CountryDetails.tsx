import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ArrowLeftIcon } from '../icons/Icons'
import { Container } from '../styles/Container'
import {
  CallToAction,
  CountrFlag,
  CountryBorderItem,
  CountryBorderList,
  CountryDetailContent,
  CountryDetailContentInformation,
  CountryDetailHeading,
  CountryDetailListStyle,
  CountryDetailsStyle,
  CountryDetailContentInfoItems,
} from '../styles/CountryDetails'
import { GlobalContext } from './GlobalContext'

function CountryDetails() {
  interface Params {
    countryCode: string
  }

  const { countryCode } = useParams<Params>()
  const { countries } = useContext(GlobalContext)

  const findCountry = countries.find(
    (country) => country.alpha3Code === countryCode
  )

  return (
    <Container>
      <CountryDetailListStyle>
        <CallToAction to='/'>
          {ArrowLeftIcon}
          <span> Back</span>
        </CallToAction>
        <CountryDetailsStyle>
          <CountrFlag
            src={findCountry?.flag}
            alt={`${findCountry?.name} flag`}
          />
          <CountryDetailContent>
            <CountryDetailHeading>{findCountry?.name}</CountryDetailHeading>
            <CountryDetailContentInformation>
              <CountryDetailContentInfoItems>
                <p>
                  <strong>Native Name: </strong> {findCountry?.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>{' '}
                  {findCountry?.population?.toLocaleString('en-US')}
                </p>
                <p>
                  <strong>Region: </strong> {findCountry?.region}
                </p>
                <p>
                  <strong>Sub Region: </strong> {findCountry?.subregion}
                </p>
                <p>
                  <strong>Capital: </strong> {findCountry?.capital}
                </p>
              </CountryDetailContentInfoItems>
              <CountryDetailContentInfoItems>
                <p>
                  <strong>Top Level Domain: </strong>
                  {findCountry?.topLevelDomain
                    ?.map((topLevel) => topLevel)
                    .join(', ')}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {findCountry?.currencies?.map((currency) => (
                    <span key={currency.name}>{currency.name}</span>
                  ))}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {findCountry?.languages
                    ?.map((language) => language?.name)
                    .join(', ')}
                </p>
              </CountryDetailContentInfoItems>
            </CountryDetailContentInformation>
            <CountryDetailContentInfoItems>
              <strong>Border Countries: </strong>
              {findCountry?.borders?.length ? (
                <CountryBorderList>
                  {findCountry?.borders?.map((border) => {
                    const findBorderCountry = countries?.find(
                      (country) => country?.alpha3Code === border
                    )
                    return (
                      <CountryBorderItem to={`/country/${border}`} key={border}>
                        {findBorderCountry?.name}
                      </CountryBorderItem>
                    )
                  })}
                </CountryBorderList>
              ) : (
                <span>No border countries for this country.</span>
              )}
            </CountryDetailContentInfoItems>
          </CountryDetailContent>
        </CountryDetailsStyle>
      </CountryDetailListStyle>
    </Container>
  )
}

export default CountryDetails
