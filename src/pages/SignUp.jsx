import React from 'react';
import Button from '../components/Button';
import Form from '../components/Form/Form';

const SignUp = ({ onSwitch }) => {
	return (
		<div className='signin-form flex flex-col gap-2 w-3/5 h-72 ml-20'>
			<h3 className='title font-title text-4xl text-light font-x-bold'>
				Sign up
			</h3>
			<p className='text-light'>Time to explore movies</p>
			<Form
				formInputs={[
					{
						type: 'text',
						placeholder: 'Username',
						onInputChange: (value, isValid) => {},
					},
					{
						type: 'password',
						placeholder: 'Password',
						onInputChange: (value, isValid) => {},
					},
					{
						type: 'password',
						placeholder: 'Confirm Password',
						onInputChange: (value, isValid) => {},
					},
				]}
			/>
			<Button className='mt-8' text={'Sign up'} type='cta' onClick={() => {}} />
			<p className='text-sm text-light self-center mt-2'>
				Already have an account?{' '}
				<span>
					<a
						className='ml-1 text-accent-1 cursor-pointer hover:text-accent-2'
						onClick={() => onSwitch()}
					>
						Sign in
					</a>
				</span>
			</p>
		</div>
	);
};

export default SignUp;
