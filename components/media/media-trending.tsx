'use client';
import { Media } from '@/types';
import './media-trending.css';
import MediaTrendingCarousel from './media-trending-carousel';
import MediaTrendingImage from './media-trending-image';

const MediaTrending = ({ media }: { media: Media[] }) => {
	const items = media.map((item) => (
		<MediaTrendingImage image={item?.thumbnail} />
	));

	return <MediaTrendingCarousel items={items} />;
};

export default MediaTrending;
