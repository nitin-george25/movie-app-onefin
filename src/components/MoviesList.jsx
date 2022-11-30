import React, { useState } from 'react';

import MovieRow from './MovieRow';
import Searchbar from './Searchbar';

const MoviesList = ({ movies, onSelect }) => {
	const [filteredMovies, setFilteredMovies] = useState(movies);

	const handleSearch = (value) => {
		let updatedFilteredMovies = [...movies];

		if (value !== '') {
			updatedFilteredMovies = updatedFilteredMovies.filter((movie) => {
				return movie.title?.toLowerCase().indexOf(value.toLowerCase()) > -1;
			});
		}

		setFilteredMovies(updatedFilteredMovies);
	};

	return (
		<>
			<Searchbar className={'mb-4'} onSearch={handleSearch} />
			<div className='movies-list flex flex-col gap-4 h-full w-full overflow-scroll'>
				{filteredMovies.map((movie, index) => (
					<MovieRow key={index} movie={movie} onClick={onSelect} />
				))}
			</div>
		</>
	);
};

export default MoviesList;
