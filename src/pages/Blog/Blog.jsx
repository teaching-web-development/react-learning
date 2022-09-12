import React from 'react';
import { CountContext, Omuk } from '../../App';

const Blog = () => {
    const result = React.useContext(CountContext);
    const { any, CardPass } = React.useContext(Omuk);

    // const {any} = omuk;
    const handleClick = () => {
        result.setCount({ roll: 50 });
    }
    console.log('after', result, any);
    return (
        <div>
            <h1>Blog</h1>
            <h1>{any}</h1>
            <button type="" className='btn btn-success' onClick={() => handleClick()}>Click Me</button>
            <CardPass name="Blog" nope="nope" />
        </div>
    );
};

export default Blog;