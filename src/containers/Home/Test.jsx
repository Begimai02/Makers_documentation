import React from 'react';
import { useContext, useEffect } from 'react';
import { docsContext } from '../../contexts/DocsContext';

const Test = () => {
    const { docs, getDocs } = useContext(docsContext)

    useEffect(() => {
        getDocs()
    }, [])
    console.log(docs)

    return (
        <div>
                {/* {docs.map(item => {
                    {item.title}
                })} */}
        </div>
    );
};

export default Test;