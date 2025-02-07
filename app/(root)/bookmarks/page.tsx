import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function BookmarksPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return <section>Bookmarks</section>;
}
