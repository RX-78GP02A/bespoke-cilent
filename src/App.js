import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/AboutPage/About';
import Recipes from './components/pages/RecipesPage/Recipes';
import Profile from './components/pages/ProfilePage/Profile';
import Footer from './components/pages/Footer/Footer';
import Form from './components/pages/SignupPage/Form';
import LoginForm from './components/pages/LoginPage/LoginForm'



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/About' component={About}/>
        <Route path='/Recipes' component={Recipes}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Form' component={Form}/>
        <Route path='/LoginForm' component={LoginForm}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;