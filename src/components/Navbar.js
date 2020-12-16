import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	// used to clear
	useEffect(() => {
		window.addEventListener('resize', showButton);
		return () => {
			window.removeEventListener('resize', showButton);
		};
	}, []);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className='navbar'>
					<div className='navigation_container container'>
						<Link to='/' className='navigation_logo' onClick={closeMobileMenu}>
							BESPOKE
						</Link>

						<div className='menu_icon' onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul
							className={click ? 'navigation_menu active' : 'navigation_menu'}>
							<li className='navigation_item'>
								<Link
									to='/'
									className='navigation_links'
									onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='navigation_item'>
								<Link
									to='/About'
									className='navigation_links'
									onClick={closeMobileMenu}>
									About
								</Link>
							</li>
							<li className='navigation_item'>
								<Link
									to='/Recipes'
									className='navigation_links'
									onClick={closeMobileMenu}>
									Recipes
								</Link>
							</li>
							<li className='navigation_item'>
								<Link
									to='/Post'
									className='navigation_links'
									onClick={closeMobileMenu}>
									Post
								</Link>
							</li>
							<li className='navigation_item'>
								<Link
									to='/Profile'
									className='navigation_links'
									onClick={closeMobileMenu}>
									Profile
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
