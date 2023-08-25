import React from 'react';
import Register from './components/Register';
import Login  from './components/Login';
import { Routes, Route} from 'react-router-dom';
import './App.css';

function App() {


  return (
    <div className="app-container">
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App
