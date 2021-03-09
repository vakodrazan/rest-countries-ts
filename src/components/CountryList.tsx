import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from './GlobalContext'

function CountryList() {
    const { countries } = useContext(GlobalContext);
    console.log(countries);

    // const countryCode = useParams();
    // console.log(countryCode);
    

    return (
        <article>
            {countries.map((country) => (
                <Link to={`/country/${country.alpha3Code}`} key={country.numericCode}>
                    <section>
                        <img src={country.flag} />
                        <h2>{country.name}</h2>
                        <p>{country.population}</p>
                        <p>{country.region}</p>
                        <p>{country.capital}</p>
                    </section>
                </Link>
            ))}
        </article>
    )
}

export default CountryList
