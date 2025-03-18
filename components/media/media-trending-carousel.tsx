'use client';

import AliceCarousel from 'react-alice-carousel';
import { ReactElement } from 'react';

const MediaTrendingCarousel = ({ items }: { items: ReactElement[] }) => {
	const responsive = {
		0: { items: 2 },
		768: { items: 3 },
	};
	return (
		<AliceCarousel
			mouseTracking
			items={items}
			paddingRight={50}
			disableButtonsControls={true}
			disableDotsControls={true}
			responsive={responsive}
		/>
	);
};

export default MediaTrendingCarousel;
