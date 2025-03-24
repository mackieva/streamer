import { JsonObject } from '@/types';
import './media-trending.css';
import MediaTrendingCarousel from './media-trending-carousel';
import MediaTrendingImage from './media-trending-image';

const MediaTrending = ({ media }: { media: JsonObject[] }) => {
	const items = media.map((item) => (
		<MediaTrendingImage
			key={item.id}
			image={item.thumbnail.trending}
			id={item.id}
		/>
	));

	return <MediaTrendingCarousel items={items} />;
};

export default MediaTrending;
