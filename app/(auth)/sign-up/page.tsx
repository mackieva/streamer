import { Metadata } from 'next';
import SignUpForm from './sign-up-form';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Sign Up',
};

const SignUpPage = () => {
	return (
		<main className='w-[400px] p-8 rounded-xl bg-blueTertiary placeholder:text-blueSecondary'>
			<h2 className='heading-l mb-10'>Sign Up</h2>
			<SignUpForm />
			<p className='text-center'>
				Already have an account?{' '}
				<Link href='/sign-in' className='text-red'>
					Login
				</Link>
			</p>
		</main>
	);
};

export default SignUpPage;
