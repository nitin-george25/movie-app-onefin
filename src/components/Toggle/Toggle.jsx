import React, { useState } from 'react';

const Toggle = ({ onToggle = () => {} }) => {
	const [pressed, setPressed] = useState(false);

	const handleToggle = () => {
		setPressed(!pressed);
		onToggle();
	};

	return (
		<button
			className={`${
				pressed ? 'bg-primary-2' : 'bg-primary'
			} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent 
      rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
			type='switch'
			aria-pressed={pressed}
			onClick={() => handleToggle()}
		>
			<span
				className={`${
					pressed ? 'translate-x-5' : 'translate-x-0'
				} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform 
        ring-0 transition ease-in-out duration-200`}
			/>
		</button>
	);
};

export default Toggle;
