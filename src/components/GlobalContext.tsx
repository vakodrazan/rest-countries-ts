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
  resetSearchForm: () => void
  theme: string
  isLoading: boolean
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
  resetSearchForm: () => null,
  isLoading: true,
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('')
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)

  async function getCountry() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    setCountries(data)
    setIsLoading(false)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    getCountry()
    toggleTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const resetSearchForm = () => {
    setRegion('')
    setCountryName('')
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
        resetSearchForm,
        isLoading,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
