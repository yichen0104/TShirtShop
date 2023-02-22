import './App.css';
import React from 'react';
import HeaderNavBar from './containers/HeaderNavBar/HeaderNavBar';
import FooterPanel from './containers/FooterPanel/FooterPanel'
import NotImplemented from './containers/NotImplemented/NotImplemented';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import ProductPage from './containers/ProductsPage/ProductPage/ProductPage';
import HomePage from './containers/HomePage/HomePage';
import CartPage from './containers/CartPage/CartPage';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import appRoutes from './shared/appRoutes';

function App() {
  return (
    <div className="App">
      
      <div className='MainContent'>
      
      <BrowserRouter>
      <HeaderNavBar></HeaderNavBar>
        <Routes>
          <Route path={appRoutes.home} element={<HomePage />} />
          <Route path={appRoutes.products} element={<ProductsPage />} />
          <Route path={appRoutes.product} element={<ProductPage />} />
          <Route path={appRoutes.cart} element={<CartPage />} />
          <Route path={appRoutes.notImplemented} element={<NotImplemented />} />
        </Routes>
      <FooterPanel/>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
