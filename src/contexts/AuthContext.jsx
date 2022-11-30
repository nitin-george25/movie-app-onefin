import { createContext, useContext, useReducer } from 'react';

import { getToken } from '../actions/getToken';
import shopReducer, { initialState } from '../reducers/authReducer';

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(shopReducer, initialState);

	const updateToken = (username, password) => {
		return new Promise((resolve, reject) => {
			var updatedToken = '';

			const res = getToken(username, password);

			res
				.then((res) => {
					updatedToken = res.data.token;

					dispatch({
						type: 'UPDATE_TOKEN',
						payload: {
							token: updatedToken,
						},
					});

					resolve(updatedToken);
				})
				.catch((err) => reject(err));
		});
	};

	const restoreToken = (token) => {
		dispatch({
			type: 'UPDATE_TOKEN',
			payload: {
				token: token,
			},
		});
	};

	const resetToken = () => {
		dispatch({
			type: 'UPDATE_TOKEN',
			payload: {
				token: '',
			},
		});
	};

	const contextValue = {
		token: state.token,
		updateToken,
		restoreToken,
		resetToken,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useShop hook may only be used within an AuthContext!');
	}

	return context;
};
