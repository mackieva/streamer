import { userSignOut } from '@/lib/actions/user.actions';

const SignOutButton = () => {
	return (
		<form action={userSignOut}>
			<button type='submit'>Sign Out</button>
		</form>
	);
};

export default SignOutButton;
