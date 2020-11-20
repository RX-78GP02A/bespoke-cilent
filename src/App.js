import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';




function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/> 
      </Switch>
    </div>
  );
}

export default App;