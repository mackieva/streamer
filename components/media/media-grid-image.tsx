import Image from 'next/image';
const MediaGridImage = ({ thumbnails }: { thumbnails: any }) => {
	return (
		<>
			<Image
				src={thumbnails.regular.large}
				width={280}
				height={174}
				alt='Thumbnail'
				className='rounded-lg'
			/>
		</>
	);
};

export default MediaGridImage;
