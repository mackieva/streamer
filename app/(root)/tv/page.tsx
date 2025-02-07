import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function TelevisionPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return (
		<section>
			<h2 className='heading-l'>TV Series</h2>
		</section>
	);
}
