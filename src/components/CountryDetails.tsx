import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { GlobalContext } from './GlobalContext';

function CountryDetails() {
    interface Params { countryCode: string }
    const { countryCode } = useParams<Params>();

    interface Language { 
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeName: string,
     }

    const { countries } = useContext(GlobalContext);

    const findCountry = countries.find(country => country.alpha3Code === countryCode);
    console.log(findCountry);

    return (
        <article>
            <img src={findCountry?.flag} alt={`${findCountry?.name} flag`} />
            <section>
                <div>
                    {/* <p>Native Name: {findCountry?.nativeName}</p> */}
                    <p>Population: {findCountry?.population}</p>
                    <p>Region: {findCountry?.region}</p>
                    <p>Sub Region: {findCountry?.subregion}</p>
                    <p>Capital: {findCountry?.capital}</p>
                </div>
                <div>
                    <p>Top Level Domain: {findCountry?.topLevelDomain?.map(topLevel => (
                        <span key={topLevel}>{topLevel}</span>
                    ))}</p>
                    {/* <p>Currencies: {findCountry?.currencies}</p> */}
                    {/* <p>Languages: {languages?.map(language => (
                        <span>{language?.nativea}</span>
                    ))}</p> */}
                </div>
            </section>
        </article>
    )
}

export default CountryDetails
