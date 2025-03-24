import { getAllMedia } from '@/lib/actions/media.actions';
import MediaGrid from '@/components/media/media-grid';
import MediaTrending from '@/components/media/media-trending';
import SignOutButton from '@/components/test/signoutbtn';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import GridBlockSkeleton from '@/components/skeleton/grid-block';
import GridBlockTrendingSkeleton from '@/components/skeleton/grid-block-trending';

export default async function Home() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}
	const media = await getAllMedia();
	const trending = media.filter((item) => item.isTrending === true);
	const movies = media.filter((item) => item.category === 'Movie');
	const television = media.filter((item) => item.category !== 'Movie');
	const sortedMedia = movies.concat(television);
	return (
		<section>
			<h2 className='mb-8 heading-l'>Trending</h2>
			<Suspense fallback={<GridBlockTrendingSkeleton />}>
				<MediaTrending media={trending} />
			</Suspense>
			<h2 className='mt-8 mb-8 heading-l'>Recommended for you</h2>
			<Suspense fallback={<GridBlockSkeleton />}>
				<MediaGrid media={sortedMedia} />
			</Suspense>
		</section>
	);
}
