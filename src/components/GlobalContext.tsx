import React, { createContext, useEffect, useState } from 'react'

type Language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

type Currencies = {
  code: string
  name: string
  symbol: string
}

export type Country = {
  name?: string
  topLevelDomain?: string[]
  alpha2Code?: string
  alpha3Code?: string
  callingCodes?: string[]
  capital?: string
  altSpellings?: string[]
  region?: string
  subregion?: string
  population?: number
  latlng?: number[]
  demonym?: string
  area?: number
  gini?: number
  timezones?: string[]
  borders?: [string]
  nativeName?: string
  numericCode?: string
  currencies?: Currencies[]
  languages?: Language[]
  translations?: string[]
  flag?: string
  regionalBlocs?: string[]
  cioc?: string
}

type State = {
  countries: Country[]
  region: string
  countryName: string
  setCountries: React.Dispatch<React.SetStateAction<never[]>>
  setRegion: React.Dispatch<React.SetStateAction<string>>
  setCountryName: React.Dispatch<React.SetStateAction<string>>
  toggleTheme: () => void
  theme: string
}

const initialState: State = {
  countries: [],
  region: '',
  countryName: '',
  setCountries: () => null,
  setRegion: () => null,
  setCountryName: () => null,
  toggleTheme: () => null,
  theme: 'dark',
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('')
  const [theme, setTheme] = useState('dark')

  async function getCountry() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    setCountries(data)
  }

  useEffect(() => {
    getCountry()
    toggleTheme()
  }, [])

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <GlobalContext.Provider
      value={{
        countries,
        setCountries,
        region,
        countryName,
        setRegion,
        setCountryName,
        toggleTheme,
        theme,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
