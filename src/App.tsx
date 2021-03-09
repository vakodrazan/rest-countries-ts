import React from 'react';
import './App.css';
import Header from './components/Header';
import {GlobalContextProvider} from './components/GlobalContext'
import CountryList from './components/CountryList';
import { Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <CountryList />
              </Route>
              <Route path={`/country/:countryCode`}>
                <CountryDetails />
              </Route>
            </Switch>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
