import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container } from '../styles/Container';
import { CountryListStyle } from '../styles/CountryList';
import FilterCountries from './FilterCountries';
import { GlobalContext } from './GlobalContext'

function CountryList() {
    const { countries } = useContext(GlobalContext);

    return (
        <Container data-testid="wrapper">
            <FilterCountries />
            <CountryListStyle data-testid="country-list">
                {countries.map((country) => (
                    <li className="country-list" data-testid="country-item" key={country.numericCode}>
                        <Link to={`/country/${country.alpha3Code}`}>
                            <img src={country.flag} alt={`${country.name} flag`} />
                            <h2 className="country-list-heading" data-testid="country-title">{country.name}</h2>
                            <div className="country-list-content" data-testid="country-content">
                                <p className="country-list-content-detail" data-testid="country-population">
                                    Population: 
                                    <span className="country-list-content-detail-item"> {country.population}</span>
                                </p>
                                <p className="country-list-content-detail" data-testid="country-region">
                                    Region: 
                                    <span className="country-list-content-detail-item"> {country.region}</span>
                                </p>
                                <p className="country-list-content-detail" data-testid="country-capital">
                                    Capital:
                                    <span className="country-list-content-detail-item"> {country.capital}</span>
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </CountryListStyle>
        </Container>
    )
}

export default CountryList
