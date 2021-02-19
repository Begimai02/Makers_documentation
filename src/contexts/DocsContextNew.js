import React, { useReducer } from 'react';
import axios from 'axios';

export const docsContextNew = React.createContext();

const INIT_STATE = {
    docs: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_THEMES":
            return {
                ...state,
                docs: action.payload
            }
        default: return state
    }
}

const DocsContextNewProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addTheme = (themeNew) => {
        axios.post("http://localhost:8000/docs", themeNew)
        getThemes()
    }

    const getThemes = async () => {
        const { data } = await axios("http://localhost:8000/docs")
        dispatch({
            type: "GET_THEMES",
            payload: data
        })
    }

    return (
        <docsContextNew.Provider
            value={{
                docs: state.docs,
                addTheme,
                getThemes,
            }}
        >
            {children}
        </docsContextNew.Provider>
    )
}

export default DocsContextNewProvider;