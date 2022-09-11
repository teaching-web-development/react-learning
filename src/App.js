import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from './MainNav/MainNav';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';


export const CountContext = React.createContext();

const App = () => {


  const [count, setCount] = React.useState({ roll: 10 });
  // console.log(count);

  return (
    <div className='container'>
      <MainNav />
      <CountContext.Provider value={count}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </CountContext.Provider>

    </div>
  );
};

export default App;