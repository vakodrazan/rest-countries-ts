import { type } from 'node:os'
import React, { createContext , useEffect, useReducer, useState} from 'react'

// Languages's type
type Language = { 
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

// Currencies's type
type Currencies = { 
    code: string,
    name: string,
    symbol: string,
}

// The object inside of the array's type
type Country = {
    name?: string,
    topLevelDomain?: string[],
    alpha2Code?: string,
    alpha3Code?: string,
    callingCodes?: string[],
    capital?: string,
    altSpellings?: string[],
    region?: string,
    subregion?: string,
    population?: number,
    latlng?: number[],
    demonym?: string,
    area?: number,
    gini?: number,
    timezones?: string[],
    borders?: [string],
    nativeName?: string,
    numericCode?: string,
    currencies?: Currencies[],
    languages?: Language[],
    translations?: string[],
    flag?: string,
    regionalBlocs?: string[],
    cioc?: string
}

// Define the initial state' type
type State = {
    countries: Country[],
    dispatch: React.Dispatch<any>
}

// Set initial value
const initialState: State = {
    countries: [],
    dispatch: () => null
};

// Action type
type Action = {
        type: string, 
        payload: Country[] 
    }

// Create the context
export const GlobalContext = createContext(initialState)

// reducer function where the value is called to make it works
function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case 'COUNTRY_DATA':
            return { 
                ...state,
                countries: action.payload
            }
        case 'FILTER_COUNTRY_BY_NAME':
            return { 
                ...state,
                countries: action.payload,
            }

        default:
           return state
    }
}

// Context function that will wrap the whole app
export const GlobalContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function getCountry() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
       const data = await res.json();
       dispatch({type: "COUNTRY_DATA", payload: data})
    }

    useEffect(() => {
        getCountry()
    }, []);

    return (
        <GlobalContext.Provider value={{ 
            countries: state.countries,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}