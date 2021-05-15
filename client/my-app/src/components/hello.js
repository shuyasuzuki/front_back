import React from 'react';
import {useEffect, useState} from 'react';

export const Hello = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/').then(res => {
            if(res.ok){
                return res.json()
            }}
        ).then(jsonResponse => console.log(jsonResponse))
    },[]);

    console.log(initialState);
    return(<div>Hey</div>);
}