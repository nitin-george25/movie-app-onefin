import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretLeft,
	faCaretRight,
	faClose,
} from '@fortawesome/free-solid-svg-icons';

import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';
import EmptyCard from '../components/EmptyCard';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../actions/getMovies';
import { useAuth } from '../contexts/AuthContext';

import RefreshImage from '../assets/refresh.svg';

const Movies = () => {
	const { token } = useAuth();
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(
		'https://demo.credy.in/api/v1/maya/movies/'
	);
	const [previousPage, setPreviousPage] = useState('');
	const [nextPage, setNextPage] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [selectedMovie, setSelectedMovie] = useState(null);

	useEffect(() => {
		getMoviesPage(currentPage);
	}, [currentPage, token]);

	const getMoviesPage = (link) => {
		if (link === '') {
			return;
		}

		console.log('we are here');
		setIsLoading(true);

		getMovies(link, token)
			.then((res) => {
				setMovies(res.results);
				setCurrentPage(link);
				setNextPage(res.next || '');
				setPreviousPage(res.previous || '');
				setIsLoading(false);
			})
			.catch((err) => {
				setMovies([]);
				setNextPage('');
				setPreviousPage('');
				setIsLoading(false);
			});
	};

	const refresh = () => {
		getMoviesPage(currentPage);
	};

	const openMovie = (movie) => {
		setSelectedMovie(movie);
	};

	return (
		<>
			{selectedMovie && (
				<div className='modal absolute h-full w-full flex items-center justify-center'>
					<MovieCard movie={selectedMovie}>
						<FontAwesomeIcon
							className='text-xl text-error dark:text-error-dark cursor-pointer'
							icon={faClose}
							onClick={() => setSelectedMovie(null)}
						/>
					</MovieCard>
				</div>
			)}
			<div className='movies h-2/3 w-2/5'>
				{isLoading ? (
					<div className='h-full overflow-scroll'>
						<Loader repeat={movies.length}></Loader>
					</div>
				) : (
					<>
						{movies.length > 0 ? (
							<MoviesList movies={movies} onSelect={openMovie} />
						) : (
							<EmptyCard img={RefreshImage}>
								<p className='text-gray font-light max-w-xs text-center mt-5'>
									Seems like there was a problem in loading the data, please
									<span
										className='font-s-bold text-primary dark:text-primary-2 cursor-pointer'
										onClick={() => refresh()}
									>
										{` Click Here `}
									</span>
									to Refresh
								</p>
							</EmptyCard>
						)}
					</>
				)}
				<nav className='pagination flex items-center justify-between mt-2'>
					<span
						className={`text-sm ${
							previousPage === ''
								? 'text-gray'
								: 'text-primary dark:text-primary-2'
						} cursor-pointer`}
						onClick={() => setCurrentPage(previousPage)}
					>
						<FontAwesomeIcon className='mr-2' icon={faCaretLeft} />
						Previous
					</span>

					<button
						className='bg-inherit border-none'
						onClick={() => setCurrentPage(nextPage)}
						disabled={nextPage === ''}
					>
						<span
							className={`text-sm ${
								nextPage === ''
									? 'text-gray'
									: 'text-primary dark:text-primary-2'
							} cursor-pointer`}
						>
							Next
							<FontAwesomeIcon className='ml-2 mr-4' icon={faCaretRight} />
						</span>
					</button>
				</nav>
			</div>
		</>
	);
};

export default Movies;
