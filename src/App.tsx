import React from 'react';
import './App.css';
import Header from './components/Header';
import {GlobalContextProvider} from './components/GlobalContext'
import CountryList from './components/CountryList';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
            <Header />
            <Switch>
              <Route path="/">
                <CountryList />
              </Route>
            </Switch>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
