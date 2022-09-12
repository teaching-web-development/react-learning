import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from './MainNav/MainNav';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';


export const CountContext = React.createContext();
export const Omuk = React.createContext();

export const CardPass = (props) => {
  console.log('app-props', props);
  return (
    <div>
      <h1>Card passing</h1>
      <h1>Card passing</h1>
      <h1>Card passing</h1>
    </div>
  )
}

const App = () => {
  const [count, setCount] = React.useState({ roll: 10 });
  // console.log(count);
  const name = 'abu';
  const arrName = [0, '', null]
  return (
    <div className='container'>
      <MainNav />
      <CountContext.Provider value={{ count, setCount, name, arrName }}>
        <Omuk.Provider value={{ any: 'omuk jhamela', CardPass }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Omuk.Provider>
      </CountContext.Provider >
    </div >
  );
};

export default App;