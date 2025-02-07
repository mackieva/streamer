import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function BookmarksPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return (
		<section>
			<h2 className='heading-l'>Bookmarked Movies</h2>
			<h2 className='heading-l'>Bookmarked TV Series</h2>
		</section>
	);
}
