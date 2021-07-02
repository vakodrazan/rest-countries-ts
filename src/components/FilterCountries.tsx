import React, { useContext, useEffect, useState } from 'react'
import { Container } from '../styles/Container'
import { Form } from '../styles/FilterCountries'
import { GlobalContext } from './GlobalContext'

function FilterCountries() {
  const { dispatch, countries } = useContext(GlobalContext)
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('')

  // Filter by country name
  function filterByName() {
    const filterCountries = countries.filter((country) =>
      country.name
        ?.toLocaleLowerCase()
        .includes(countryName.toLocaleLowerCase())
    )
    dispatch({ type: 'FILTER_COUNTRY_BY_NAME', payload: filterCountries })
  }

  useEffect(() => {
    filterByName()
  }, [countryName])

  // Filter by country region
  function filterByRegion() {
    const filterCountryRegion = countries.filter((country) =>
      country.region?.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    )
    dispatch({ type: 'FILTER_COUNTRY_BY_NAME', payload: filterCountryRegion })
  }

  useEffect(() => {
    filterByRegion()
  }, [region])

  return (
    <Form>
      <fieldset className='search-name'>
        <input
          type='text'
          name='country-name'
          id='country-name'
          placeholder='Search for a country...'
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
      </fieldset>
      <select
        name='border'
        id='border'
        value={region}
        onChange={({ target }) => setRegion(target.value)}
        className='search-region'>
        <option value=''>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </Form>
  )
}

export default FilterCountries
