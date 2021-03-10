import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import FilterCountries from './FilterCountries';
import { GlobalContext } from './GlobalContext'

function CountryList() {
    const { countries } = useContext(GlobalContext);

    return (
        <div data-testid="wrapper">
            <FilterCountries />
            <ul data-testid="country-list">
                {countries.map((country) => (
                    <li data-testid="country-item" key={country.numericCode}>
                        <Link to={`/country/${country.alpha3Code}`}>
                            <img src={country.flag} alt={`${country.name} flag`} />
                            <h2 data-testid="country-title">{country.name}</h2>
                            <div data-testid="country-content">
                                <p data-testid="country-population">{country.population}</p>
                                <p data-testid="country-region">{country.region}</p>
                                <p data-testid="country-capital">{country.capital}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CountryList
