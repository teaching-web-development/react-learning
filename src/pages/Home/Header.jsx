import React from 'react';

const Header = ({ testName, testObj1, testArr10 }) => {
    // const { testName, testObj1, testArr10 } = props;
    // console.log('object', testName, testObj1, testArr10);

    // console.log(props);
    // console.log(props.testName);
    // console.log(props.testObj1.name);
    // console.log(props.testArr10);

    return (
        <div>
            <h1>Header {testName}</h1>

            <div>
                <span>Name: {testObj1.name}</span>
                <br />
                <span>Roll: {testObj1.roll}</span>
            </div>
        </div>
    );
};

export default Header;