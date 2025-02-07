import { auth } from '@/auth';
import SignOutButton from '@/components/test/signoutbtn';
import { redirect } from 'next/navigation';
import Header from '@/components/header/header';
export default async function Home() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return (
		<div className='site-container p-8 min-h-screen'>
			<Header />
			<main></main>
		</div>
	);
}
