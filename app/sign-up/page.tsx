import SignUpForm from './sign-up-form';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';

const SignUpPage = () => {
	return (
		<section className='flex flex-col justify-start items-center'>
			<Image src={logo} alt='Streaming Logo' className='mt-20 mb-20' />
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
		</section>
	);
};

export default SignUpPage;
