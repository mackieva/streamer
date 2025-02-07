import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function Home() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return (
		<section>
			<h2 className='heading-l'>Trending</h2>
			<h2 className='heading-l'>Recommended for you</h2>
		</section>
	);
}
