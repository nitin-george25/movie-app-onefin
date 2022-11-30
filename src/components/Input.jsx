import React, { useEffect, useState } from 'react';

const Input = ({ className, type, placeholder, label, onInputChange }) => {
	const [valid, setValid] = useState(true);

	const handleInputChange = (e) => {
		const value = e.currentTarget.value;
		const isValid = e.currentTarget.value !== '';

		setValid(isValid);
		onInputChange(value, isValid);
	};

	return (
		<div
			className={`input-container relative ${
				type === 'checkbox' ? 'flex items-center gap-2 mt-2' : 'mt-5'
			}`}
		>
			<input
				type={type}
				id={placeholder}
				className={`${className} border-1 bg-primary text-light border-light focus:outline-none 
        pl-2 h-8 rounded-md placeholder:text-light dark:bg-primary-2 ${
					type !== 'checkbox' ? 'w-full' : ''
				}`}
				placeholder={placeholder}
				onChange={(e) => handleInputChange(e)}
			/>
			{type === 'checkbox' ? (
				<label className='text-sm text-light' htmlFor={placeholder}>
					{label}
				</label>
			) : (
				<></>
			)}
			{valid || type === 'checkbox' ? (
				<></>
			) : (
				<p className='text-error text-xs absolute top-2 right-2'>
					This field is required
				</p>
			)}
		</div>
	);
};

export default Input;
