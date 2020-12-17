import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import { useState } from 'react';
import Courses from './components/Courses/Courses';

function App() {
  
  

  return (
    <div className="App"> 
      <Header></Header>
      <Courses></Courses>

    </div>
  );
}

export default App;
