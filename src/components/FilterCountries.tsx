import React, { useContext, useState } from 'react'
import {
  DropDownItem,
  DropDownList,
  Form,
  InputSearch,
  SelectDropDown,
  SelectDropDownContainer,
} from '../styles/FilterCountries'
import { GlobalContext } from './GlobalContext'

const ArrowUpIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='currentColor'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z' />
  </svg>
)

const ArrowDownIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='currentColor'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
  </svg>
)

const SearchIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='currentColor'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
  </svg>
)

function FilterCountries() {
  const { setCountryName, countryName, setRegion, region } =
    useContext(GlobalContext)

  const [isOpen, setIsOpen] = useState(false)
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const onClickRegion = (region: string) => {
    setIsOpen(false)
    setRegion(region)
  }

  const onToggleDropDown = (event: any) => {
    setIsOpen(!isOpen)
  }

  const DropDownIcon = isOpen ? ArrowUpIcon : ArrowDownIcon

  return (
    <Form>
      <InputSearch className='search-name'>
        {SearchIcon}
        <input
          type='text'
          name='country-name'
          id='country-name'
          placeholder='Search for a country...'
          value={countryName}
          onChange={({ target }) => setCountryName(target.value)}
          autoComplete='off'
        />
      </InputSearch>

      <SelectDropDownContainer>
        <SelectDropDown onClick={onToggleDropDown}>
          <span>{region ? region : 'Filter by Region'}</span>
          {DropDownIcon}
        </SelectDropDown>

        {isOpen && (
          <DropDownList>
            {regions.map((region) => (
              <DropDownItem
                key={region}
                onClick={() => onClickRegion(region)}
                arial-label={`${region}'s region`}>
                {region}
              </DropDownItem>
            ))}
          </DropDownList>
        )}
      </SelectDropDownContainer>
    </Form>
  )
}

export default FilterCountries
