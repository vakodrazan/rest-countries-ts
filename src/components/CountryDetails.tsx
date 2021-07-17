import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '../icons/Icons'
import { Container } from '../styles/Container'
import {
  CountryBorderItem,
  CountryBorderList,
  CountryDetailContent,
  CountryDetailListStyle,
  CountryDetailsStyle,
} from '../styles/CountryDetails'
import { GlobalContext } from './GlobalContext'

function CountryDetails() {
  // Get the params' type
  interface Params {
    countryCode: string
  }

  const { countryCode } = useParams<Params>()
  const { countries } = useContext(GlobalContext)

  // Find the item that is clicked
  const findCountry = countries.find(
    (country) => country.alpha3Code === countryCode
  )

  return (
    <Container>
      <CountryDetailListStyle>
        <Link to='/' className='call-to-action'>
          {ArrowLeftIcon}
          <span> Back</span>
        </Link>
        <CountryDetailsStyle>
          <img src={findCountry?.flag} alt={`${findCountry?.name} flag`} />
          <CountryDetailContent>
            <div>
              <div>
                <p>Native Name: {findCountry?.nativeName}</p>
                <p>
                  Population: {findCountry?.population?.toLocaleString('en-US')}
                </p>
                <p>Region: {findCountry?.region}</p>
                <p>Sub Region: {findCountry?.subregion}</p>
                <p>Capital: {findCountry?.capital}</p>
              </div>
              <div>
                <p>
                  Top Level Domain:{' '}
                  {findCountry?.topLevelDomain
                    ?.map((topLevel) => topLevel)
                    .join(', ')}
                </p>
                <p>
                  Currencies:{' '}
                  {findCountry?.currencies?.map((currency) => (
                    <span key={currency.name}>{currency.name}</span>
                  ))}
                </p>
                <p>
                  Languages:{' '}
                  {findCountry?.languages
                    ?.map((language) => language?.name)
                    .join(', ')}
                </p>
              </div>
            </div>
            <div>
              Border Countries:
              {findCountry?.borders?.length ? (
                <CountryBorderList>
                  {findCountry?.borders?.map((border) => {
                    const findBorderCountry = countries?.find(
                      (country) => country?.alpha3Code === border
                    )
                    console.log(findBorderCountry)

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
            </div>
          </CountryDetailContent>
        </CountryDetailsStyle>
      </CountryDetailListStyle>
    </Container>
  )
}

export default CountryDetails
