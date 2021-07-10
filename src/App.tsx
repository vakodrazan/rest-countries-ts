import React, { useContext } from 'react'
import Header from './components/Header'
import { GlobalContext } from './components/GlobalContext'
import CountryList from './components/CountryList'
import { Route, Switch } from 'react-router'
import CountryDetails from './components/CountryDetails'
import { ThemeProvider } from 'styled-components'
import { darkMode, GlobalStyles, lightMode } from './theme/ThemeMode'

function App() {
  const { theme } = useContext(GlobalContext)
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/'>
          <CountryList />
        </Route>
        <Route path={`/country/:countryCode`}>
          <CountryDetails />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
