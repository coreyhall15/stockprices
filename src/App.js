import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;
