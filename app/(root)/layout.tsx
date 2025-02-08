import Header from '@/components/header/header';
import SearchBar from '@/components/search/search-bar';

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col lg:grid lg:grid-cols-[96px_1fr] lg:gap-9 lg:p-8 lg:min-h-screen '>
			<Header />
			<main className='w-full'>
				<SearchBar />
				{children}
			</main>
		</div>
	);
};

export default authLayout;
