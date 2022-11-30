import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import Toggle from './components/Toggle/Toggle';
import Button from './components/Button';
import AuthWrapper from './pages/AuthWrapper';

import { useAuth } from './contexts/AuthContext';

import './App.css';

function App() {
	const [isDark, setIsDark] = useState(false);

	const { token, restoreToken, resetToken } = useAuth();

	useEffect(() => {
		const storedToken =
			localStorage.getItem('token') ?? sessionStorage.getItem('token');

		if (storedToken) {
			restoreToken(storedToken);
		}
	}, []);

	const handleSignOut = () => {
		localStorage.clear();
		sessionStorage.clear();
		resetToken();
	};

	return (
		<div
			className={`movies-app flex flex-col h-screen w-screen${
				isDark ? ' dark' : ''
			}`}
		>
			<nav className='navbar flex items-center justify-between p-5 dark:bg-dark'>
				<h1 className='font-title font-s-bold text-2xl text-primary dark:text-primary-2'>
					Movies A2Z
				</h1>
				<div className='flex items-center justify-end gap-8'>
					<div className='dark-mode-toggle flex items-center gap-2'>
						{isDark ? (
							<FontAwesomeIcon className='text-white' icon={faMoon} />
						) : (
							<FontAwesomeIcon className='text-accent-1' icon={faSun} />
						)}
						<Toggle onToggle={() => setIsDark(!isDark)} />
					</div>
					{token !== '' ? (
						<Button
							type={'primary'}
							text='Sign out'
							onClick={() => handleSignOut()}
						/>
					) : (
						<></>
					)}
				</div>
			</nav>
			<div
				className={`movies-app flex-1 h-full flex items-center justify-center w-screen relative dark:bg-dark overflow-hidden`}
			>
				<AuthWrapper />
			</div>
		</div>
	);
}

export default App;
