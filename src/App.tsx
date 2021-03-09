import React from 'react';
import './App.css';
import Header from './components/Header';
import {GlobalContextProvider} from './components/GlobalContext'
import CountryList from './components/CountryList';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
            <Header />
            <CountryList />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
