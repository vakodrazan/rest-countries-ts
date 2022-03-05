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
import {
  CountryContentTitle,
  CountryContentDetailItem,
} from '../styles/CountryList'
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
            src={findCountry?.flags?.png}
            alt={`${findCountry?.name} flag`}
          />
          <CountryDetailContent>
            <CountryDetailHeading>{findCountry?.name}</CountryDetailHeading>
            <CountryDetailContentInformation>
              <CountryDetailContentInfoItems>
                <CountryContentTitle>
                  Native Name:{' '}
                  <CountryContentDetailItem>
                    {findCountry?.nativeName}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Population:{' '}
                  <CountryContentDetailItem>
                    {findCountry?.population?.toLocaleString('en-US')}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Region:{' '}
                  <CountryContentDetailItem>
                    {findCountry?.region}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Sub Region:{' '}
                  <CountryContentDetailItem>
                    {findCountry?.subregion}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Capital:{' '}
                  <CountryContentDetailItem>
                    {findCountry?.capital}
                  </CountryContentDetailItem>
                </CountryContentTitle>
              </CountryDetailContentInfoItems>
              <CountryDetailContentInfoItems>
                <CountryContentTitle>
                  Top Level Domain:
                  <CountryContentDetailItem>
                    {findCountry?.topLevelDomain
                      ?.map((topLevel) => topLevel)
                      .join(', ')}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Currencies:
                  <CountryContentDetailItem>
                    {findCountry?.currencies?.map((currency) => (
                      <span key={currency.name}>{currency.name}</span>
                    ))}
                  </CountryContentDetailItem>
                </CountryContentTitle>
                <CountryContentTitle>
                  Languages:
                  <CountryContentDetailItem>
                    {findCountry?.languages
                      ?.map((language) => language?.name)
                      .join(', ')}
                  </CountryContentDetailItem>
                </CountryContentTitle>
              </CountryDetailContentInfoItems>
            </CountryDetailContentInformation>
            <CountryDetailContentInfoItems>
              <CountryContentTitle>Border Countries: </CountryContentTitle>
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
