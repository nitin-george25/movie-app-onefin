import React from 'react';

import Avatar from './Avatar';

const MovieCard = ({ movie, className, children }) => {
	return (
		<div
			className={`${className} movie-card flex gap-4 border-1 p-3 
      rounded-lg mr-2 h-2/3 w-3/5 bg-white opacity-100 z-20 dark:bg-dark relative`}
		>
			<Avatar className='flex-1 max-w-fit' size={'lg'} name={movie?.title} />
			<dl className='movie-details flex-1 flex flex-col justify-between'>
				<div className='box'>
					<dd className='font-title text-4xl font-x-bold leading-tight dark:text-white'>
						{movie?.title}
					</dd>
					<dd className='font-light leading-4 mt-4 dark:text-white'>
						{movie?.description}
					</dd>
				</div>
				<div className='genre flex gap-5'>
					<dt className='font-s-bold text-gray text-lg leading-8'>Genres</dt>
					<dd className='text-lg font-light leading-8 dark:text-white'>
						{movie?.genres !== '' ? movie?.genres : 'Not Available'}
					</dd>
				</div>
			</dl>
			{children}
		</div>
	);
};

export default MovieCard;
