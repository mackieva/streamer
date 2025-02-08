import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import bookmarkIcon from '@/public/images/icon-bookmark-empty.svg';
const MediaGridImage = ({ thumbnails }: { thumbnails: any }) => {
	return (
		<div className='media-item__imageContainer'>
			<Image
				src={thumbnails.regular.large}
				width={280}
				height={174}
				alt='Thumbnail'
				className='rounded-lg w-full'
				objectFit='cover'
			/>
			<div className='play'>
				<button className='rounded-full heading-xs play-btn'>
					<Image src={playIcon} alt='Play Icon' />
					Play
				</button>
			</div>
			<button className='rounded-full bookmark-btn'>
				<Image src={bookmarkIcon} alt='Bookmark Icon' width={12} height={14} />
			</button>
		</div>
	);
};

export default MediaGridImage;
