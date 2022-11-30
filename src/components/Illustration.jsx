import React from 'react';

const Illustration = ({ img, orientation }) => {
	return (
		<div className='illustration-card flex items-center justify-center flex-1 bg-inherit relative rounded-l-xl h-full'>
			<img
				src={img}
				className={`${orientation === 'horizontal' ? 'w-3/4' : 'h-1/2'}`}
			/>
		</div>
	);
};

export default Illustration;
