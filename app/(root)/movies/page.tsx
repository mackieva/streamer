import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function MoviesPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return <section>Movies</section>;
}
