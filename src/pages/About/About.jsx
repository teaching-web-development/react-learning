import React from 'react';
import { addFunction, nameEx } from '../Home/Home';

const About = () => {
    console.log(addFunction(5, 10));

    return (
        <div>
            <h1>About {nameEx}</h1>
        </div>
    );
};

export default About;