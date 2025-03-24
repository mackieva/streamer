import tv from '@/public/images/icon-category-tv.svg';
import movie from '@/public/images/icon-category-movie.svg';
import Image from 'next/image';
import MediaGridImage from './media-grid-image';
import { JsonObject } from '@/types';
import './media-grid.css';

const MediaGrid = async ({ media }: { media: JsonObject[] }) => {
	return (
		<div className='gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{media.map((item) => (
				<div key={item.id} className='media-item'>
					<MediaGridImage thumbnails={item.thumbnail} id={item.id} />
					<div className='flex justify-start items-center gap-2 mt-2'>
						<span className='opacity-75 body-sm'>{item.year}</span> &middot;{' '}
						{item.category === 'Movie' ? (
							<Image src={movie} width={12} height={12} alt='Film Strip Icon' />
						) : (
							<Image
								src={tv}
								width={12}
								height={12}
								alt='Television Set Icon'
							/>
						)}
						<span className='opacity-75 body-sm'>{item.category}</span> &middot;{' '}
						<span className='opacity-75 body-sm'>{item.rating}</span>
					</div>
					<h3 className='heading-xs'>{item.title}</h3>
				</div>
			))}
		</div>
	);
};

export default MediaGrid;
