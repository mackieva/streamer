import SignInForm from './sign-in-form';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';

const SignInPage = () => {
	return (
		<section className='flex flex-col justify-start items-center'>
			<Image src={logo} alt='Streaming Logo' className='mt-20 mb-20' />
			<main className='w-[400px] p-8 rounded-xl bg-blueTertiary placeholder:text-blueSecondary'>
				<h2 className='heading-l mb-10'>Login</h2>
				<SignInForm />
				<p className='text-center'>
					Don't have an account?{' '}
					<a href='#' className='text-red'>
						Sign Up
					</a>
				</p>
			</main>
		</section>
	);
};

export default SignInPage;
