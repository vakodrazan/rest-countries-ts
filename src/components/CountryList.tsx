import React, { useContext, useMemo, useState } from 'react';
import { Container, PaginationContainer } from '../styles/Container';
import { CountryListStyle } from '../styles/CountryList';
import FilterCountries from './FilterCountries';
import { Country, GlobalContext } from './GlobalContext';
import ListContent from './ListContent';
import { Loading } from './Loading';
import Pagination from './Pagination';

function CountryList() {
  const { countries, countryName, region } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 8;

  const filteredCountriesByName = (allCountries: Country[]) => {
    return allCountries.filter((country) =>
      country?.name
        .toLocaleLowerCase()
        .includes(countryName.toLocaleLowerCase())
    );
  };

  const filteredByRegion = (allCountries: Country[]) => {
    return allCountries.filter((country) =>
      country.region?.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    );
  };

  const filteredCountries = filteredByRegion(
    filteredCountriesByName(countries)
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredCountries.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, currentPage, filteredCountries]);

  return (
    <Container data-testid='wrapper'>
      <FilterCountries />
      <Loading />
      <CountryListStyle data-testid='country-list'>
        {currentTableData.map((country) => (
          <ListContent key={country.numericCode} country={country} />
        ))}
      </CountryListStyle>
      <PaginationContainer>
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={filteredCountries.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </Container>
  );
}

export default CountryList;
