import React, { useContext, useState } from 'react'
import {
  DropDownItem,
  DropDownList,
  Form,
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
      <fieldset className='search-name'>
        <input
          type='text'
          name='country-name'
          id='country-name'
          placeholder='Search for a country...'
          value={countryName}
          onChange={({ target }) => setCountryName(target.value)}
        />
      </fieldset>

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
