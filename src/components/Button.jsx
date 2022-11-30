import React from 'react';

const Button = ({ className, type, text, isLoading, disabled, onClick }) => {
	const classSelector = {
		primary: 'bg-primary text-white border-primary',
		secondary: 'bg-white text-primary border-primary',
		cta: 'bg-accent-2 text-light border-accent-2 dark:bg-accent-2-dark dark:border-accent-2-dark',
		'cta-secondary': 'bg-white text-primary border-0',
	};

	const handleClick = () => {
		onClick();
	};

	return (
		<button
			className={`${classSelector[type]} ${
				className ?? ''
			} border-1 rounded-md px-8 py-1 self-center min-w-button font-x-bold font-title flex items-center justify-center`}
			disabled={disabled}
			onClick={() => handleClick()}
		>
			{isLoading ? (
				<div className='lds-ring'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			) : (
				text
			)}
		</button>
	);
};

export default Button;
