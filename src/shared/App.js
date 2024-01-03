import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from "../components/Header";
import MainPage from "../pages/MainPage";
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

import FleamarketPage from '../pages/FleamarketPage';
import NearbystorePage from '../pages/NearbystorePage';
import JobsPage from '../pages/JobsPage';
import RealtyPage from '../pages/RealtyPage';
import CarPage from '../pages/CarPage';

import HotArticlePage from '../pages/HotArticlesPage';

import NearByStoreAll from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreAll';
import NearByStoreRestaurant from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreRestaurant';
import NearByStoreCafe from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreCafe';
import NearByStoreMove from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreMove';
import NearByStoreBeauty from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreBeauty';
import NearByStoreHealth from '../components/NavBarList/NavBarItems/NearByStoreItems/NearByStoreHealth';


import Footer from '../components/Footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* <Route path='/:category' /> */}
        <Route path='/fleamarket' element={<FleamarketPage />} />
        <Route path='/nearbystore' element={<NearbystorePage />}>
          <Route path='' element={<NearByStoreAll />}/>
          <Route path='all' element={<NearByStoreAll />}/>
          <Route path='restaurant' element={<NearByStoreRestaurant />}/>
          <Route path='cafe' element={<NearByStoreCafe />}/>
          <Route path='move' element={<NearByStoreMove />}/>
          <Route path='beauty' element={<NearByStoreBeauty />}/>
          <Route path='health' element={<NearByStoreHealth />}/>
        </Route>
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/realty' element={<RealtyPage />} />
        <Route path='/car' element={<CarPage />} />

        <Route path='/hot_articles' element={<HotArticlePage />} />

      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
