import React from 'react';

import Avatar from './Avatar';

const MovieRow = ({ movie, onClick }) => {
	return (
		<div
			className='movie-row flex items-center gap-4 border-1 p-3 rounded-lg mr-2 cursor-pointer'
			onClick={() => onClick(movie)}
		>
			<Avatar className='flex-1 max-w-fit' name={movie.title} />
			<dl className='movie-details flex-1'>
				<dd className='font-title text-xl font-x-bold leading-10 dark:text-white'>
					{movie.title}
				</dd>
				<dd className='text-sm font-light w-80 text-cut leading-4 mb-4 dark:text-gray'>
					{movie.description}
				</dd>
				<div className='description flex gap-5'>
					<dt className='font-s-bold text-gray text-sm leading-6'>Genres</dt>
					<dd className='text-sm font-light leading-6 dark:text-white'>
						{movie.genres !== '' ? movie.genres : 'Not Available'}
					</dd>
				</div>
			</dl>
		</div>
	);
};

export default MovieRow;
