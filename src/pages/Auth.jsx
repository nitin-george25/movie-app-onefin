import React, { useState } from 'react';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Illustration from '../components/Illustration';

import { useAuth } from '../contexts/AuthContext';

import LoginImg from '../assets/undraw_login_re_4vu2.svg';
import SignupImg from '../assets/undraw_authentication_re_svpt.svg';

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const { updateToken } = useAuth();

	const handleSignIn = (username, password, persist) => {
		setIsLoading(true);
		updateToken(username, password)
			.then((res) => {
				if (persist) {
					localStorage.setItem('token', res);
				} else {
					sessionStorage.setItem('token', res);
				}
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	};

	return (
		<div
			className='auth-card h-4/5 w-2/3 relative rounded-xl 
    border-8 border-primary dark:border-primary-2 bg-light dark:bg-slate-500
		transition-colors delay-150 duration-300'
		>
			<div
				className={`slide-card h-full w-1/2 flex items-center 
        justify-center bg-light dark:bg-slate-500 relative ${
					isLogin ? '' : ' translate-x-full'
				} transition-transform delay-150 duration-300`}
			>
				<Illustration
					img={isLogin ? LoginImg : SignupImg}
					size='lg'
					orientation={isLogin ? 'horizontal' : 'vertical'}
				/>
			</div>
			<div
				className={`slide-card absolute left-1/2 top-0 w-1/2 h-full flex 
      flex-col justify-center flex-1 bg-primary dark:bg-primary-2${
				isLogin ? ' rounded-l-2xl' : ' rounded-r-2xl translate-x-back'
			} transition-all delay-150 duration-300`}
			>
				{isError && (
					<p className='text-error text-xs absolute top-52 left-20 z-50'>
						Kindly check the credentials you have entered
					</p>
				)}
				{isLogin ? (
					<SignIn
						onSignIn={handleSignIn}
						onSwitch={() => {
							setIsLogin(!isLogin);
						}}
						isLoading={isLoading}
					/>
				) : (
					<SignUp
						onSwitch={() => {
							setIsLogin(!isLogin);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Auth;
