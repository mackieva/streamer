import { Media } from '@/types';
import tv from '@/public/images/icon-category-tv.svg';
import movie from '@/public/images/icon-category-movie.svg';
import Image from 'next/image';
import MediaGridImage from './media-grid-image';

const MediaGrid = ({ media }: { media: Media[] }) => {
	return (
		<div className='grid grid-cols-4 gap-10'>
			{media.map((item) => (
				<div key={item.id}>
					<MediaGridImage thumbnails={item.thumbnail} />
					<div className='flex justify-start items-center gap-2 mt-2'>
						<span className='body-sm opacity-75'>{item.year}</span> &middot;{' '}
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
						<span className='body-sm opacity-75'>{item.category}</span> &middot;{' '}
						<span className='body-sm opacity-75'>{item.rating}</span>
					</div>
					<h3 className='heading-xs'>{item.title}</h3>
				</div>
			))}
		</div>
	);
};

export default MediaGrid;
