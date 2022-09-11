import React from 'react';
import { CountContext } from '../../App';

const Blog = () => {
    const result = React.useContext(CountContext);
    console.log(result);
    
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
};

export default Blog;