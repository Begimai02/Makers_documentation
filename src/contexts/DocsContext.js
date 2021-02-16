import axios from 'axios';
import React, { useReducer } from 'react';

export const docsContext = React.createContext();

const INIT_STATE = {
    docs: []
};

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_DOCS": 
            return {
                ...state,
                docs: action.payload
            }
        default: return state
    }
}

const DocsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getDocs = async () => {
        const { data } = await axios('http://localhost:8000/docs');
        console.log(data)
        dispatch({
            type: "GET_DOCS",
            payload: data
        })
    } 

    return (
        <docsContext.Provider value={{
            docs: state.docs,
            getDocs
        }}>
            {children}
        </docsContext.Provider>
    );
};

export default DocsContextProvider;