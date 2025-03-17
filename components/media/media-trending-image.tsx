import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import MediaBookmark from './media-bookmark';
import { getUserBookmarks } from '@/lib/actions/media.actions';
import { Suspense } from 'react';
const MediaTrendingImage = async ({
	image,
	id,
}: {
	image: any;
	id: string;
}) => {
	const bookmarks = await getUserBookmarks();
	return (
		<div className='media-item__imageContainer media-item__imageContainer--trending'>
			<Image
				src={image.trending.large}
				width={470}
				height={230}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill hidden md:block'
			/>
			<Image
				src={image.trending.small}
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
