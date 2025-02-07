import { auth } from '@/auth';
import SignOutButton from '@/components/test/signoutbtn';
export default async function Home() {
	const session = await auth();

	return session ? (
		<p>
			Logged In: {session?.user?.email}
			<SignOutButton />
		</p>
	) : (
		<p>Logged out</p>
	);
}
