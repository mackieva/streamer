import { auth } from '@/auth';
import SignOutButton from '@/components/test/signoutbtn';
import { redirect } from 'next/navigation';
export default async function Home() {
	const session = await auth();
	if (!session) {
		redirect('/sign-in');
	}

	return session ? (
		<p>
			Logged In: {session?.user?.email}
			<SignOutButton />
		</p>
	) : (
		<p>Logged out</p>
	);
}
