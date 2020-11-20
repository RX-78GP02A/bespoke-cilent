import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/AboutPage/About';
import Profile from './components/pages/ProfilePage/Profile';
import Recipes from './components/pages/Recipes/Recipes';
import Footer from './components/pages/Footer/Footer';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Recipes' component={Recipes}/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/Login' component={Login}/> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;