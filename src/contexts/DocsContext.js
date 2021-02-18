import axios from "axios";
import React, { useReducer } from "react";

export const docsContext = React.createContext();

const INIT_STATE = {
<<<<<<< HEAD
  docs: [],
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
=======
    docs: [],
    themeId: null,
    topics: [],
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DOCS":
            return {
                ...state,
                docs: action.payload
            }
        case "PUSH_ID":
            return {
                ...state,
               themeId: action.payload
            }
        case "GET_TOPICS":
            return {
                ...state,
                topics: action.payload
            }
        default: return state
    }
}

const DocsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getDocs = async () => {
        const { data } = await axios('http://localhost:8000/docs');
        // console.log(data)
        dispatch({
            type: "GET_DOCS",
            payload: data
        })
    }

    const addNewTheme = (newTheme) => {
        axios.post('http://localhost:8000/docs', newTheme)
        // console.log(newTheme)
        getDocs()
    }

    const pushThemeId = async (id) => {  // I AM HERE NOW -------------------------
        // await axios(`http://localhost:8000/docs/${id}`);
        dispatch({
            type: "PUSH_ID",
            payload: id
        })
        console.log(id)
    }

    const getTopics = async () => {
        const { data } = await axios('http://localhost:8000/topics');
        console.log(data)
        dispatch({
            type: "GET_TOPICS",
            payload: data
        })
    }

    const addNewTopic = (newTopic) => {
        axios.post('http://localhost:8000/topics', newTopic);
        console.log(newTopic);
        getTopics()

    }


    return (
        <docsContext.Provider value={{
            docs: state.docs,
            themeId: state.themeId,
            getDocs,
            addNewTheme,
            addNewTopic,
            pushThemeId,
            getTopics,
        }}>
            {children}
        </docsContext.Provider>
    );
>>>>>>> 8423540e8e32ff36f51b171763c8de3e8a31648a
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
