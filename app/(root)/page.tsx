import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getAllMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
export default async function Home() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getAllMedia();
	const movies = media.filter((item) => item.category === 'Movie');
	const television = media.filter((item) => item.category !== 'Movie');
	const sortedMedia = movies.concat(television);
	return (
		<section>
			<h2 className='heading-l mb-8'>Trending</h2>
			<h2 className='heading-l mb-8'>Recommended for you</h2>
			<MediaGrid media={sortedMedia} />
		</section>
	);
}
