import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from './GlobalContext'

function CountryList() {
    const { countries } = useContext(GlobalContext);

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.numericCode}>
                    <Link to={`/country/${country.alpha3Code}`}>
                        <img src={country.flag} alt={`${country.name} flag`} />
                        <h2>{country.name}</h2>
                        <div>
                            <p>{country.population}</p>
                            <p>{country.region}</p>
                            <p>{country.capital}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CountryList
