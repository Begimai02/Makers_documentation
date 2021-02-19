import axios from "axios";
import React, { useReducer } from "react";

export const docsContext = React.createContext();

const INIT_STATE = {
    docs: [],
    oneObjTheme: null, // здесь хранится вытащенный по id одна тема (объект)
    newTopicRep: null,  //здесь я сохр старую (выше) тему с пушенными топиками
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DOCS":
            return {
                ...state,
                docs: action.payload,
            };
        case "GET_THEME-ID":  // сохраняю вытащенную по id тему-объект в oneObjTheme
            return {
                ...state,
                oneObjTheme: action.payload,
            };
        case "PUSH_NEW_TOPIC":
            return {
                ...state,
                newTopicRep: action.payload
            };


        case "GET_TOPICS":
            return {
                ...state,
                topics: action.payload,
            };
        default:
            return state;
    }
};

const DocsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getDocs = async () => {
        const { data } = await axios("http://localhost:8000/docs");
        // console.log(data)
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

    const pushTheme = async (id) => {  // здесь я вытаскиваю старую тему-объект и храню в oneObjTheme
        let { data } = await axios(`http://localhost:8000/docs/${id}`);
        dispatch({
            type: "GET_THEME-ID",
            payload: data,
        });
        
    };


    const pushTopic = (newTopic) => {  // запушила топик и старая тема-объект уже новая, с новыми топиками
        state.oneObjTheme.topics.push(newTopic)
        // console.log(newTopic)

        // let newObj = {
        //     ...state.oneObjTheme,
        // }

        // dispatch({
        //     type: "PUSH_NEW_TOPIC",
        //     payload: state.newObjTheme
        // })
        // console.log(newTopicRep)
    }

    const addNewTopic = async (id) => {  // сюда прилетает id темы, которую я выбрала. Далее я заменяю тему-объект (вычисленный по id) на новый, с новыми топиками
        let repository = state.oneObjTheme
        await axios.patch(`http://localhost:8000/docs/${id}`, repository);
        getDocs();
        // console.log(state.docs)
        // console.log(state.oneObjTheme)
        console.log(repository)
    }
// console.log(state.oneObjTheme)


    const getTopics = async (newTopic) => {
        // const { data } = await axios("http://localhost:8000/topics");

        // let newTop = state.oneObjTheme.topics.push(newTopic)

        // console.log(oneObjTheme);
        // console.log(newTopic);

        // let newObj = {
        //     ...oneObjTheme,
        //     topics: "new topic"
        // }

        // dispatch({
        //     type: "GET_TOPICS",
        //     payload: data,
        // });
    };



    return (
        <docsContext.Provider
            value={{
                docs: state.docs,
                oneObjTheme: state.oneObjTheme,
                newTopicRep: state.newTopicRep,
                getDocs,
                addNewTheme,
                addNewTopic,
                pushTheme,
                pushTopic,
                getTopics,
            }}
        >
            {children}
        </docsContext.Provider>
    );
};
export default DocsContextProvider;
