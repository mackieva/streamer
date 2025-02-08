import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getTelevisionMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
export default async function TelevisionPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getTelevisionMedia();
	console.log(media);
	return (
		<section>
			<h2 className='heading-l mb-8'>TV Series</h2>
			<MediaGrid media={media} />
		</section>
	);
}
