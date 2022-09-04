import React from 'react';
import './header.css';

const Header = (props) => {
    // object destructure
    const { title, nam } = props;
    console.log(title, nam);
    return (
        <div className='header'>
            <h4>Header title: {title}, Name: {nam}</h4>
        </div>
    );
};

export default Header;