import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewEvent from './components/NewEvent';
import './App.css'
import Login from './components/Login';
import Faciale from './components/webcam/WebcamCapture';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/NewEvent' element={<NewEvent/>} />
              <Route path='/Camera' element={<Faciale/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
