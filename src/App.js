import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import Toolbar from './containers/Toolbar/Toolbar';
import HomePage from './pages/HomePage/HomePage';
import Glass from './pages/Glass';
import Wooden from './pages/Wooden';
import Pottery from './pages/Pottery';
import TableCloth from './pages/Tablecloth';
import Candle from './pages/Candle';
import Ceramic from './pages/Ceramic';
import Store from './pages/Store/Store';
import Notification from './pages/Notification/Notification';
import NotificationContextProvider from './containers/Context/NotificationContext';
import ShoppingBoxContextProvider from './containers/Context/ShoppingBoxContext';
import SignInContextProvider from './containers/Context/SignInContext';

function App() {

  return (
    <div className="App">
      <SignInContextProvider>
      <NotificationContextProvider>
        <ShoppingBoxContextProvider>
          <BrowserRouter>
            {/* <Toolbar /> */}
            <Routes>
              <Route path='/' element={ <Toolbar />}>
              <Route index element={<HomePage />} />
              <Route path='/store' element={<Store />} />
              <Route path='/store/pottery' element={<Pottery />} />
              <Route path='/store/wodden' element={<Wooden />} />
              <Route path='/store/glass' element={<Glass />} />
              <Route path='/store/candle' element={<Candle />} />
              <Route path='/store/ceramic' element={<Ceramic />} />
              <Route path='/store/tablecloth' element={<TableCloth />} />
              <Route path='/notification' element={<Notification />} />
              <Route path='*' element={
                <main>
                  <div className='no-page'>
                  </div>
                </main>
              } /></Route>
              
            </Routes>
          </BrowserRouter>
        </ShoppingBoxContextProvider>
      </NotificationContextProvider>
      </SignInContextProvider>
    </div>
  );
}

export default App;
