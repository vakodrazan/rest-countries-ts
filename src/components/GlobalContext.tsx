import React, { createContext , useEffect, useReducer} from 'react'

type Language = { 
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

type Currencies = { 
    code: string,
    name: string,
    symbol: string,
}

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

type State = {
    countries: Country[]
}

const initialState: State = {
    countries: []
};


type Action = {
    type: "COUNTRY_DATA", 
    payload: Country[]
}

export const GlobalContext = createContext(initialState)

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'COUNTRY_DATA':
            return { countries: action.payload}

    
        default:
           return state
    }
}

export const GlobalContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    async function getCountry() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
       const data = await res.json();
       dispatch({type: "COUNTRY_DATA", payload: data})
    }
    useEffect(() => {
        getCountry()
    },[])
    return (
        <GlobalContext.Provider value={{ countries: state.countries }}>
            {children}
        </GlobalContext.Provider>
    )
}