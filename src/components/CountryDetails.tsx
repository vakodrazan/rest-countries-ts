import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Container } from '../styles/Container'
import {
  CountryBorderItem,
  CountryBorderList,
  CountryDetailListStyle,
  CountryDetailsStyle,
} from '../styles/CountryDetails'
import { GlobalContext } from './GlobalContext'

const ArrowLeftIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 24 24'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='currentColor'>
    <rect fill='none' height='24' width='24' />
    <path d='M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z' />
  </svg>
)

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
          <div>
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
          </div>
        </CountryDetailsStyle>
      </CountryDetailListStyle>
    </Container>
  )
}

export default CountryDetails
