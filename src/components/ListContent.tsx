import React from 'react';
import {
  CountryListItem,
  CountryListHeading,
  CountryListContent,
  CountryContentTitle,
  CountryContentDetailItem,
  CountryListItemImage,
} from '../styles/CountryList';
import { Link } from 'react-router-dom';
import { Country } from './GlobalContext';

type Item = {
  country: Country;
};

function ListContent({ country }: Item) {
  return (
    <>
      <CountryListItem data-testid='country-item' key={country.numericCode}>
        <Link to={`/country/${country.alpha3Code}`}>
          <CountryListItemImage
            src={country.flags?.png}
            alt={`${country?.name} flag`}
          />
          <CountryListHeading data-testid='country-title'>
            {country?.name}
          </CountryListHeading>
          <CountryListContent data-testid='country-content'>
            <CountryContentTitle data-testid='country-population'>
              Population:
              <CountryContentDetailItem>
                {' '}
                {country.population}
              </CountryContentDetailItem>
            </CountryContentTitle>
            <CountryContentTitle data-testid='country-region'>
              Region:
              <CountryContentDetailItem>
                {' '}
                {country.region}
              </CountryContentDetailItem>
            </CountryContentTitle>
            <CountryContentTitle data-testid='country-capital'>
              Capital:
              <CountryContentDetailItem>
                {' '}
                {country.capital}
              </CountryContentDetailItem>
            </CountryContentTitle>
          </CountryListContent>
        </Link>
      </CountryListItem>
    </>
  );
}

export default ListContent;
