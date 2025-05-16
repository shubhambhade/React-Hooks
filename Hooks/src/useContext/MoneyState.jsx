import React, { useState } from 'react'

import MyContext from './MyContext';

const MoneyState = (props) => {

    const [counter, setCounter] = useState(0);

    const person ={
        name:'ram',
        age:20,
        email:'ram@gmail.com',
    }

    const money = 1000;

    return (
        <MyContext.Provider value={{ money,person , counter, setCounter }}> {props.children} </MyContext.Provider>
    )
};

export default MoneyState;
