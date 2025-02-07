import Header from '@/components/header/header';
import SearchBar from '@/components/search/search-bar';

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='site-container p-8 min-h-screen'>
			<Header />
			<main className='w-full'>
				<SearchBar />
				{children}
			</main>
		</div>
	);
};

export default authLayout;
