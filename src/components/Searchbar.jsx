import React, { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const Searchbar = ({ onSearch, placeholder, className }) => {
	const searchRef = useRef(null);

	useEffect(() => {
		const keyUp = fromEvent(searchRef.current, 'keyup');

		keyUp
			.pipe(
				map((i) => i.currentTarget.value),
				debounceTime(250)
			)
			.subscribe((val) => {
				if (val.length > 3) {
					onSearch(val);
				}
			});
	}, []);

	return (
		<div
			data-testid='search-bar'
			className={`${className} search-bar border-1 border-slate-400
      rounded-lg`}
		>
			<form
				className='search-input'
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					className='search-input placeholder:capitalize w-full focus:outline-none 
          rounded-xl px-2 py-1 font-light dark:text-light text-sm'
					type='text'
					ref={searchRef}
					placeholder={placeholder || 'Start Typing...'}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
