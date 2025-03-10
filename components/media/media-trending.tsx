import { Media } from '@/types';
import './media-trending.css';
import MediaTrendingCarousel from './media-trending-carousel';
import MediaTrendingImage from './media-trending-image';

const MediaTrending = ({ media }: { media: Media[] }) => {
	const items = media.map((item) => (
		<MediaTrendingImage key={item.id} image={item?.thumbnail} id={item.id} />
	));

	return <MediaTrendingCarousel items={items} />;
};

export default MediaTrending;
