import React from 'react';
import { useLocation } from 'react-router-dom';
import MainBtn from '../../components/ui-components/Buttons/MainBtn';

const Test = () => {
    const clickHandler = (e) => {
        console.log(e);
    }
    const secondHan = e => {
        console.log(e);
    }

    let location = useLocation();
    const { search } = location;
    console.log(search === '');

    console.log(search);
    // if (search) {
    //     alert("Test")
    // }

    return (
        <div>
            <h1>Test {search}</h1>

            <MainBtn btnText="Hover Me" clickHandler={secondHan} />
            <br />
            <MainBtn btnText="Click Me" clickHandler={clickHandler} />
            <br />
            <button type="" onClick={clickHandler}>Click me</button>
        </div>
    );
};

export default Test;