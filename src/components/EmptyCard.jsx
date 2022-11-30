import React from 'react';

const EmptyCard = ({ img, children }) => {
	return (
		<div className='empty-card flex flex-col items-center justify-center h-full'>
			<img className='w-3/5' src={img} alt='Data not found' />
			{children}
		</div>
	);
};

export default EmptyCard;
