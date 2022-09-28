import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';

const App = () => {
  // const user = true;
  // console.log(user ? 'Logged In User' : 'Not Logged In');
  return (
    <div>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        {/* {user && <Route exact path="/about" element={<About />} />} */}
        <Route
          exact
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          } />
        <Route exact path="/test" element={
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        } />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;