import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './containers/Toolbar/Toolbar';
import HomePage from './pages/HomePage';
import Carpet from './pages/Carpet';
import Glass from './pages/Glass';
import Wooden from './pages/Wooden';
import Pottery from './pages/Pottery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          {/* <Route path='/' element={<Toolbar />} > */}
            <Route index element={<HomePage />} />
            <Route path='/pottery' element={<Pottery />} />
            <Route path='/wodden' element={<Wooden />} />
            <Route path='/glass' element={<Glass />} />
            <Route path='/carpet' element={<Carpet />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
