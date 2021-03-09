import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

function CountryList() {
    const { countries } = useContext(GlobalContext);
    console.log(countries);

    return (
        <article>
            {countries.map((country) => (
                <section key={country.numericCode}>
                    <img src={country.flag} />
                    <h2>{country.name}</h2>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                    <p>{country.capital}</p>
                </section>
            ))}
        </article>
    )
}

export default CountryList
