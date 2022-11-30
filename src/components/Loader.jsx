import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = ({ repeat }) => (
	<>
		{Array.from({ length: repeat }, (_, i) => i + 1).map(() => (
			<div className='border-1 border-gray-1 rounded-lg mb-2 mr-2 h-loader'>
				<ContentLoader
					speed={2}
					width={400}
					height={150}
					viewBox='0 0 400 150'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
					bord
				>
					<rect x='140' y='30' rx='3' ry='3' width='250' height='6' />
					<rect x='140' y='50' rx='3' ry='3' width='350' height='6' />
					<rect x='140' y='110' rx='3' ry='3' width='150' height='6' />
					<circle cx='70' cy='75' r='60' />
				</ContentLoader>
			</div>
		))}
	</>
);

export default Loader;
