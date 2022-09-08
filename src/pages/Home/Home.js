import React from 'react';

const Home = () => {
    const [count, setCount] = React.useState(0);

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>This is Home {count}</h1>
            <button onClick={() => clickHandler()}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Home;