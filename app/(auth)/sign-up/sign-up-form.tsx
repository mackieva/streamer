const SignUpForm = () => {
	return (
		<form className='flex flex-col mb-6'>
			<input
				type='text'
				placeholder='Email Address'
				id='email'
				name='email'
				className='w-full border-b-[1px] border-b-blueSecondary pl-4 pb-4 mb-6'
			/>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Password'
				className='w-full border-b-[1px] border-b-blueSecondary pl-4 pb-4 mb-6'
			/>
			<input
				type='password'
				name='confirmPassword'
				id='confirmPassword'
				placeholder='Repeat password'
				className='w-full border-b-[1px] border-b-blueSecondary pl-4 pb-4 mb-10'
			/>
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
