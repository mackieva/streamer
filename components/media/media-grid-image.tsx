import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import MediaBookmark from './media-bookmark';
import { getUserBookmarks } from '@/lib/actions/media.actions';
import { Suspense } from 'react';

const MediaGridImage = async ({
	thumbnails,
	id,
}: {
	thumbnails: any;
	id: string;
}) => {
	const bookmarks = await getUserBookmarks();
	return (
		<div className='media-item__imageContainer'>
			<Image
				src={thumbnails.regular.large}
				width={280}
				height={174}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill hidden lg:block'
			/>
			<Image
				src={thumbnails.regular.medium}
				width={280}
				height={174}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill hidden md:block lg:hidden'
			/>
			<Image
				src={thumbnails.regular.small}
				width={280}
				height={174}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill block md:hidden'
			/>
			<div className='play'>
				<button className='rounded-full heading-xs play-btn'>
					<Image src={playIcon} alt='Play Icon' />
					Play
				</button>
			</div>
			<Suspense fallback={<div>Loading</div>}>
				<MediaBookmark id={id} bookmarks={bookmarks} />
			</Suspense>
		</div>
	);
};

export default MediaGridImage;
