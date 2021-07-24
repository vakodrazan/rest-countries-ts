import React, { useContext, useState } from 'react'
import {
  DropDownItem,
  DropDownList,
  Form,
  InputSearch,
  ResetButton,
  SelectDropDown,
  SelectDropDownContainer,
  Wrapper,
} from '../styles/FilterCountries'
import { GlobalContext } from './GlobalContext'
import { ArrowUpIcon, ArrowDownIcon, SearchIcon } from '../icons/Icons'

function FilterCountries() {
  const { setCountryName, countryName, setRegion, region, resetSearchForm } =
    useContext(GlobalContext)

  const [isOpen, setIsOpen] = useState(false)
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const onClickRegion = (region: string) => {
    setIsOpen(false)
    setRegion(region)
  }

  const onToggleDropDown = () => {
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
      <Wrapper>
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
        <ResetButton type='button' onClick={resetSearchForm}>
          Reset form
        </ResetButton>
      </Wrapper>
    </Form>
  )
}

export default FilterCountries
