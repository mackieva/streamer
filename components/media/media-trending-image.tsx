import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import MediaBookmark from './media-bookmark';
import { getUserBookmarks } from '@/lib/actions/media.actions';
import { Suspense } from 'react';
type CarouselImage = {
	large: string;
	small: string;
};
const MediaTrendingImage = async ({
	image,
	id,
}: {
	image: CarouselImage;
	id: string;
}) => {
	const bookmarks = await getUserBookmarks();
	return (
		<div className='media-item__imageContainer media-item__imageContainer--trending'>
			<Image
				src={image.large}
				width={470}
				height={230}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill hidden md:block'
			/>
			<Image
				src={image.small}
				width={470}
				height={230}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill block md:hidden'
			/>
			<div className='play'>
				<button className='rounded-full heading-xs play-btn'>
					<Image src={playIcon} alt='Play Icon' />
					Play
				</button>
			</div>
			<Suspense fallback={<div></div>}>
				<MediaBookmark id={id} bookmarks={bookmarks} />
			</Suspense>
		</div>
	);
};

export default MediaTrendingImage;
