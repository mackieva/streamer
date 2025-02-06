import { Metadata } from 'next';
import SignInForm from './sign-in-form';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Sign In',
};

const SignInPage = () => {
	return (
		<main className='w-[400px] p-8 rounded-xl bg-blueTertiary placeholder:text-blueSecondary'>
			<h2 className='heading-l mb-10'>Login</h2>
			<SignInForm />
			<p className='text-center'>
				Don&apos;t have an account?
				<Link href='/sign-up' className='text-red'>
					Sign Up
				</Link>
			</p>
		</main>
	);
};

export default SignInPage;
