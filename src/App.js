import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Recipes from './components/Recipes/Recipes';
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';


function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/About' component={About} />
				<Route path='/Recipes' component={Recipes} />
				<Route path='/Post' component={Post} />
				<Route path='/Profile' component={Profile} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
