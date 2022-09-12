import React from 'react';
import { CardPass } from '../../App';
import { addFunction, nameEx } from '../Home/Home';

const About = () => {
    console.log(addFunction(5, 10));

    return (
        <div>
            <h1>About {nameEx}</h1>
            <CardPass test="About" />
        </div>
    );
};

export default About;