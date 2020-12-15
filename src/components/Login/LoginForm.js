import React, { useState } from 'react';
import LoginFormPage from './LoginFormPage';
import './LoginForm.css';

const LoginForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitLoginForm() {
		setIsSubmitted(true);
	}

	return (
		<>
			<div className='login-form-container'>
				<span className='close-btn'></span>
				<div className='login-form-content-left'>
					<img src='images/bartender_2.jpg' alt='cracking_a_egg' className='form-img' />
				</div>

				{!isSubmitted && <LoginFormPage submitLoginForm={submitLoginForm} />}
			</div>
		</>
	);
};

export default LoginForm;
