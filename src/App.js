import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';




function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;