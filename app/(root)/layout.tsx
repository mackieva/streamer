import Header from '@/components/header/header';
import SearchBar from '@/components/search/search-bar';

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col lg:gap-9 lg:grid lg:grid-cols-[96px_92%] lg:p-8 lg:min-h-screen overflow-visible'>
			<Header />
			<main className='mx-4 md:mx-8 lg:mx-0'>
				<SearchBar />
				{children}
			</main>
		</div>
	);
};

export default authLayout;
