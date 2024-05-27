import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/Toolbar/Toolbar';
import HomePage from './pages/HomePage/HomePage';
import Glass from './pages/Glass';
import Wooden from './pages/Wooden';
import Pottery from './pages/Pottery';
import TableCloth from './pages/Tablecloth';
import Candle from './pages/Candle';
import Ceramic from './pages/Ceramic';
import Store from './pages/Store/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/pottery' element={<Pottery />} />
            <Route path='/store/wodden' element={<Wooden />} />
            <Route path='/store/glass' element={<Glass />} />
            <Route path='/store/candle' element={<Candle />} />
            <Route path='/store/ceramic' element={<Ceramic />} />
            <Route path='/store/tablecloth' element={<TableCloth />} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
