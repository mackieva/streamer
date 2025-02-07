import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function TelevisionPage() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return <section>Television</section>;
}
