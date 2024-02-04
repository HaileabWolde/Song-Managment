import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  return (
    <div className='flex flex-col gap-12'>
    <Navbar/>
    <Home/>
    </div>
   
  );
}

export default App;
