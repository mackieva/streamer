'use client';

const ErrorPage = ({ reset }: { reset: () => void }) => {
	return (
		<main className='flex flex-col justify-center items-center'>
			<p className='mb-6'>There was an issue signing in.</p>
			<button
				className='px-8 py-3 bg-red rounded-md text-white body-m hover:bg-white hover:text-blueTertiary transition-all'
				onClick={
					// Attempt to recover by trying to re-render the invoices route
					() => reset()
				}
			>
				Try Again
			</button>
		</main>
	);
};

export default ErrorPage;
