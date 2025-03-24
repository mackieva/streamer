'use client';
import { useActionState } from 'react';
import { userSignIn } from '@/lib/actions/user.actions';
interface InitialState {
	errors?: {
		email?: string[];
		password?: string[];
	};
}
const SignInForm = () => {
	const initialState: InitialState = { errors: {} };
	const [state, formAction] = useActionState(userSignIn, initialState);
	return (
		<form className='flex flex-col mb-6' action={formAction}>
			<input
				type='text'
				placeholder='Email Address'
				id='email'
				name='email'
				className='w-full border-b-[1px] border-b-blueSecondary pl-4 pb-4 mb-6 outline-none focus:border-b-white'
			/>
			{state?.errors?.email &&
				state.errors.email.map((e) => <p key={e}>{e}</p>)}
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
				className='w-full border-b-[1px] border-b-blueSecondary pl-4 pb-4 mb-10 outline-none focus:border-b-white'
			/>
			{state?.errors?.password &&
				state.errors.password.map((e) => <p key={e}>{e}</p>)}
			<button
				type='submit'
				className='bg-red rounded-md text-white body-m py-3 hover:bg-white hover:text-blueTertiary transition-all'
			>
				Login to your account
			</button>
		</form>
	);
};

export default SignInForm;
