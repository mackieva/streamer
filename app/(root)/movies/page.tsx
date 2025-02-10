import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getMoviesMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
export default async function MoviesPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getMoviesMedia();

	return (
		<section>
			<h2 className='mb-8 heading-l'>Movies</h2>
			<MediaGrid media={media} />
		</section>
	);
}
