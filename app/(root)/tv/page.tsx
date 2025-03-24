import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getTelevisionMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
import { Suspense } from 'react';
import GridBlockSkeleton from '@/components/skeleton/grid-block';

export default async function TelevisionPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getTelevisionMedia();
	return (
		<section>
			<h2 className='heading-l mb-8'>TV Series</h2>
			<Suspense fallback={<GridBlockSkeleton />}>
				<MediaGrid media={media} />
			</Suspense>
		</section>
	);
}
