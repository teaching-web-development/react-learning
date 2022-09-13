import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';

const App = () => {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;