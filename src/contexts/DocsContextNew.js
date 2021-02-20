import React, { useReducer } from 'react';
import axios from 'axios';

export const docsContextNew = React.createContext();

const INIT_STATE = {
  docs: [],
  themeDetail: null,
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_THEMES":
      return {
        ...state,
        docs: action.payload
      };
    case "GET_THEME_ID":
      return {
        ...state,
        themeDetail: action.payload
      };
    default: return state
  }
}

const DocsContextNewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getThemes = async () => { // ROBIT ++ but with delays
    let response = await axios.get("http://localhost:8000/docs")
    
    dispatch({
      type: "GET_THEMES",
      payload: response.data
    })
    console.log(response.data)

    return response.data
  }


  const addTheme = (themeNew) => {    // ROBIT +++
    axios.post("http://localhost:8000/docs", themeNew)
    getThemes()
    console.log(themeNew)
  }


  const getThemeId = async (id) => {  // здесь я достаю тему по id из сервера (по клику на эту тему на главной)
    let { data } = await axios(`http://localhost:8000/docs/${id}`)
    dispatch({
      type: "GET_THEME_ID",
      payload: data
    })
    console.log(id)
    console.log(data)
  }

  const deleteTheme = (id) => {
    axios.delete(`http://localhost:8000/docs/${id}`)
    getThemes();
    console.log(id)
  }

  const addTopic = async (newTop) => {
    await axios.patch(`http://localhost:8000/docs/${state.themeDetail.id}`, state.themeDetail)

    state.themeDetail.topics.push(newTop)

    // console.log(newTop)
    // console.log(state.themeDetail.id)
    console.log(state.themeDetail)
    console.log(state.docs) 
  }

  const deleteTopic = (id) => {  //TOPICS DOESN'T HAVE AN ID. EPIC FAIL (((((
  //   // axios.delete(`http://localhost:8000/docs/${state.themeDetail.topics.id}`)
  //   getThemes();
  //   console.log(id)
  }

  const topicId = (id) => {
    console.log(id)
  }

  return (
    <docsContextNew.Provider
      value={{
        docs: state.docs,
        themeDetail: state.themeDetail,
        addTheme,
        getThemes,
        getThemeId,
        deleteTheme,
        addTopic,
        deleteTopic,
        topicId,
      }}
    >
      {children}
    </docsContextNew.Provider>
  )
}

export default DocsContextNewProvider;