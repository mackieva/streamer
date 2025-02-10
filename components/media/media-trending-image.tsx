import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import bookmarkIcon from '@/public/images/icon-bookmark-empty.svg';
const MediaTrendingImage = ({ image }: { image: any }) => {
	return (
		<div className='media-item__imageContainer media-item__imageContainer--trending'>
			<Image
				src={image.trending.large}
				width={470}
				height={230}
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

export default MediaTrendingImage;
