import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Footer from '../components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
