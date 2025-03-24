'use client';
import { userSignUp } from '@/lib/actions/user.actions';
import { useActionState } from 'react';

interface State {
	errors?: {
		email?: string[];
		password?: string[];
		confirmPassword?: string[];
	};
	email?: string;
}

const SignUpForm = () => {
	const initialState: State = { errors: {}, email: '' };

	const [state, formAction] = useActionState(userSignUp, initialState);

	return (
		<form className='flex flex-col mb-6' action={formAction}>
			<input
				type='text'
				placeholder='Email Address'
				id='email'
				name='email'
				defaultValue={state?.email}
				className={`w-full border-b-[1px] pl-4 pb-4 mb-6 outline-none caret-red focus:border-b-white ${
					state?.errors?.email ? 'border-b-red' : 'border-b-blueSecondary'
				}`}
			/>
			{state?.errors?.email &&
				state.errors.email.map((e) => (
					<p key={e} className='text-red mb-6'>
						{e}
					</p>
				))}
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
				className={`w-full border-b-[1px] pl-4 pb-4 mb-6 outline-none caret-red focus:border-b-white ${
					state?.errors?.password || state?.errors?.confirmPassword
						? 'border-b-red'
						: 'border-b-blueSecondary'
				}`}
			/>
			{state?.errors?.password &&
				state.errors.password.map((e) => (
					<p key={e} className='text-red mb-6'>
						{e}
					</p>
				))}
			<input
				type='password'
				name='confirmPassword'
				id='confirmPassword'
				placeholder='Repeat password'
				className={`w-full border-b-[1px] pl-4 pb-4 mb-6 outline-none caret-red focus:border-b-white ${
					state?.errors?.confirmPassword
						? 'border-b-red'
						: 'border-b-blueSecondary'
				}`}
			/>
			{state?.errors?.confirmPassword &&
				state.errors.confirmPassword.map((e) => (
					<p key={e} className='text-red mb-6'>
						{e}
					</p>
				))}
			<button
				type='submit'
				className='bg-red rounded-md text-white body-m py-3 hover:bg-white hover:text-blueTertiary transition-all'
			>
				Create an account
			</button>
		</form>
	);
};

export default SignUpForm;
