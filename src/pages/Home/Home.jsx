import React from 'react';
import { Omuk } from '../../App';
import Header from './Header';

export const nameEx = 'Abu Hasan Test';
export const addFunction = (a, b) => {
    return a + b;
}


const Home = () => {
    const testObj = { name: 'abu', roll: 10 };
    const testArr = [{ name: 'abu', roll: 10 }, "10 asd", 20, undefined, null];

    const { CardPass } = React.useContext(Omuk);
    return (
        <div>
            <h1>Home</h1>
            <Header testName={nameEx} testObj1={testObj} testArr10={testArr} />
            <CardPass name="home"/>
        </div>
    );
};

export default Home;