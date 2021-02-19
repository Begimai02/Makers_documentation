import React, { useEffect, useContext, useState } from 'react';
import { docsContext } from '../../../contexts/DocsContext';


const Test1 = () => {
    const { oneObjTheme, newTopicRep } = useContext(docsContext);
    const [obj, setObj] = useState(oneObjTheme)
    
    // console.log(newTopicRep)

    // console.log(oneObjTheme)

    // let some = oneObjTheme?.topics.push(newTopicRep)
    // console.log(oneObjTheme.topics)
  
    // let newObj = {
    //     ...oneObjTheme
    // }

    // console.log(newObj)


    return (
        <>
            

        </>
    );
};

export default Test1;