import Header from '@/components/header/header';

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='site-container p-8 min-h-screen'>
			<Header />
			{children}
		</div>
	);
};

export default authLayout;
