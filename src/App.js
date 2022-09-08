import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;