import React from 'react';

import Auth from './Auth';
import Movies from './Movies';

import { useAuth } from '../contexts/AuthContext';

const AuthWrapper = () => {
	const { token } = useAuth();

	return token !== '' ? <Movies /> : <Auth />;
};

export default AuthWrapper;
