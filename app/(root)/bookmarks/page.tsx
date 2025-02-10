import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getBookmarkedMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
export default async function BookmarksPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getBookmarkedMedia();
	const movies = media.filter((item) => item.category === 'Movie');
	const television = media.filter((item) => item.category !== 'Movie');

	return (
		<section>
			<h2 className='heading-l'>Bookmarked Movies</h2>
			<MediaGrid media={movies} />
			<h2 className='heading-l'>Bookmarked TV Series</h2>
			<MediaGrid media={television} />
		</section>
	);
}
