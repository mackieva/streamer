import Image from 'next/image';
import logo from '@/public/images/logo.svg';

const authLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<section className='flex flex-col justify-start items-center'>
			<Image
				src={logo}
				alt='Streaming Logo'
				className='mt-20 mb-20'
				priority={true}
			/>
			{children}
		</section>
	);
};

export default authLayout;
