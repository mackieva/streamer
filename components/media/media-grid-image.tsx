import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import MediaBookmark from './media-bookmark';
import { getUserBookmarks } from '@/lib/actions/media.actions';

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
				className='rounded-lg w-full object-fill'
			/>
			<div className='play'>
				<button className='rounded-full heading-xs play-btn'>
					<Image src={playIcon} alt='Play Icon' />
					Play
				</button>
			</div>
			<MediaBookmark id={id} bookmarks={bookmarks} />
		</div>
	);
};

export default MediaGridImage;
