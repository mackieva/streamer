import { auth } from '@/auth';
import { userSignOut } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
	const session = await auth();

	if (!session) {
		redirect('/sign-in');
	}

	return (
		<main className='w-[400px]'>
			<h2 className='heading-l mb-10'>Profile</h2>
			<h3 className='heading-m mb-1'>Email</h3>
			<p className='mb-6'>{session.user?.email}</p>
			<form action={userSignOut}>
				<button className='px-8 py-3 bg-red rounded-md text-white body-m hover:bg-white hover:text-blueTertiary transition-all'>
					Sign Out
				</button>
			</form>
		</main>
	);
};

export default ProfilePage;
