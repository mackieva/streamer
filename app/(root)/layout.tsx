import Header from '@/components/header/header';
import SearchBar from '@/components/search/search-bar';
import { Suspense } from 'react';

function SearchBarFallback() {
	return <>placeholder</>;
}

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col lg:gap-9 lg:grid lg:grid-cols-[96px_92%] lg:p-8 lg:min-h-screen overflow-visible'>
			<Header />
			<main className='mx-4 md:mx-8 lg:mx-0'>
				<Suspense fallback={<SearchBarFallback />}>
					<SearchBar />
				</Suspense>
				{children}
			</main>
		</div>
	);
};

export default authLayout;
