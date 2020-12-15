import React from 'react';
import useLoginForm from './useLoginForm';
import validate from './validateLoginInfo';
import './LoginForm.css';

const LoginFormPage = ({ submitLoginForm }) => {
	const { handleChange, values, handleSubmit, errors } = useLoginForm(
		submitLoginForm,
		validate
	);

	return (
		<div className='login-form-content-right'>
			<form className='login-form' onSubmit={handleSubmit}>
				<h1>Enter your information below to get logged in.</h1>
				<div className='login-form-inputs'>
					<label htmlFor='email' className='login-form-label'>
						Email
					</label>
					<input
						id='email'
						type='email'
						name='email'
						className='login-form-input'
						placeholder='Enter your email'
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className='login-form-inputs'>
					<label htmlFor='password' className='login-form-label'>
						Password
					</label>
					<input
						id='password'
						type='password'
						name='password'
						className='loginform-input'
						placeholder='Enter your password'
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className='login-form-input-btn' type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginFormPage;
