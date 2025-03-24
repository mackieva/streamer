import { getSearchedMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
import { Suspense } from 'react';
import GridBlockSkeleton from '@/components/skeleton/grid-block';

const SearchPage = async (props: {
	searchParams: Promise<{ query: string }>;
}) => {
	const { query } = await props.searchParams;
	const media = await getSearchedMedia(query);
	return (
		<section>
			<h2 className='mb-8 heading-l'>
				Found {media.length}{' '}
				{media.length > 1 || media.length === 0 ? 'results' : 'result'} for
				&lsquo;{query}&rsquo;
			</h2>
			<Suspense fallback={<GridBlockSkeleton />}>
				<MediaGrid media={media} />
			</Suspense>
		</section>
	);
};

export default SearchPage;
