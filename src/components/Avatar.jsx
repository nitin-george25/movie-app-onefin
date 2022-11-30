import React from 'react';

const Avatar = ({ name, size, className }) => {
	return (
		<div
			className={`${className} avatar-container ${
				size === 'lg' ? 'h-full' : 'rounded-full'
			} p-1 border-1`}
		>
			<img
				className={`${size === 'lg' ? 'h-full' : 'rounded-full h-20 w-20'}`}
				src={`https://ui-avatars.com/api/?name=${name}&background=083d77&color=fff`}
			/>
		</div>
	);
};

export default Avatar;
