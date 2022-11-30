import React, { useState } from 'react';

import Button from '../components/Button';
import Form from '../components/Form/Form';

const SignIn = ({ onSwitch, onSignIn, isLoading }) => {
	const [username, setUsername] = useState({ value: '', isValid: false });
	const [password, setPassword] = useState({ value: '', isValid: false });
	const [showError, setShowError] = useState(false);
	const [persist, setPersist] = useState(false);

	const handleUsernameInput = (value, isValid) => {
		const updatedUsername = { value: value, isValid: isValid };

		setUsername(updatedUsername);
	};

	const handlePasswordInput = (value, isValid) => {
		const updatedPassword = { value: value, isValid: isValid };

		setPassword(updatedPassword);
	};

	const handleSignIn = async () => {
		if (username.isValid && password.isValid) {
			setShowError(false);
			onSignIn(username.value, password.value, persist);
		} else {
			setShowError(true);
		}
	};

	return (
		<div
			className='signin-form flex flex-col gap-2 w-3/5 h-72 ml-20 relative'
			onKeyUp={(e) => {
				if (e.code === 'Enter') {
					e.preventDefault();
					handleSignIn();
				}
			}}
		>
			<h3 className='title font-title text-4xl text-light font-x-bold'>
				Sign in
			</h3>
			<p className='text-light'>List of exciting movies awaits you</p>
			<Form
				formInputs={[
					{
						type: 'text',
						placeholder: 'Username',
						onInputChange: (value, isValid) => {
							handleUsernameInput(value, isValid);
						},
					},
					{
						type: 'password',
						placeholder: 'Password',
						onInputChange: (value, isValid) => {
							handlePasswordInput(value, isValid);
						},
					},
					{
						type: 'checkbox',
						label: 'Keep me logged in',
						onInputChange: () => {
							setPersist(!persist);
						},
					},
				]}
			/>
			<Button
				className='mt-8'
				text={'Sign in'}
				type='cta'
				isLoading={isLoading}
				disable={isLoading}
				onClick={() => handleSignIn()}
			/>
			<p className='text-sm text-light self-center mt-2'>
				Don't have an account?{' '}
				<span>
					<a
						className='ml-1 text-accent-1 cursor-pointer hover:text-accent-2'
						onClick={() => onSwitch()}
					>
						Sign up
					</a>
				</span>
			</p>
			{showError && (
				<p className='text-error text-xs absolute top-24 left-0'>
					Some required fields haven't been filled
				</p>
			)}
		</div>
	);
};

export default SignIn;
