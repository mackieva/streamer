import { getSearchedMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';

const SearchPage = async (props: {
	searchParams: Promise<{ query: string }>;
}) => {
	const { query } = await props.searchParams;
	const media = await getSearchedMedia(query);
	return (
		<section>
			<h2 className='mb-8 heading-l'>Search Results</h2>
			{/* <p>{query}</p> */}
			<MediaGrid media={media} />
		</section>
	);
};

export default SearchPage;
