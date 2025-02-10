import Image from 'next/image';
import playIcon from '@/public/images/icon-play.svg';
import MediaBookmark from './media-bookmark';
const MediaTrendingImage = async ({
	image,
	id,
}: {
	image: any;
	id: string;
}) => {
	return (
		<div className='media-item__imageContainer media-item__imageContainer--trending'>
			<Image
				src={image.trending.large}
				width={470}
				height={230}
				alt='Thumbnail'
				className='rounded-lg w-full object-fill'
			/>
			<div className='play'>
				<button className='rounded-full heading-xs play-btn'>
					<Image src={playIcon} alt='Play Icon' />
					Play
				</button>
			</div>
			<MediaBookmark id={id} />
		</div>
	);
};

export default MediaTrendingImage;
