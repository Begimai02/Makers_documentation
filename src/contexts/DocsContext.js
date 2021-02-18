import axios from "axios";
import React, { useReducer } from "react";

export const docsContext = React.createContext();

const INIT_STATE = {
  docs: [],
  topics: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DOCS":
      return {
        ...state,
        docs: action.payload,
      };
    default:
      return state;
  }
};

const DocsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getDocs = async () => {
    const { data } = await axios.get("http://localhost:8000/docs");
    dispatch({
      type: "GET_DOCS",
      payload: data,
    });
  };

  const addNewTheme = (newTheme) => {
    axios.post("http://localhost:8000/docs", newTheme);
    // console.log(newTheme)
    getDocs();
  };

  const getThemeId = (id) => {
    console.log(id);
  };
  const addNewTopic = (newTopic) => {
    axios.post(`http://localhost:8000/docs`, newTopic);
  };

  return (
    <docsContext.Provider
      value={{
        docs: state.docs,
        topics: state.topics,
        getDocs,
        addNewTheme,
        getThemeId,
        addNewTopic,
      }}
    >
      {children}
    </docsContext.Provider>
  );
};

export default DocsContextProvider;
