import logo from '@/public/images/logo.svg';
import home from '@/public/images/icon-nav-home.svg';
import movies from '@/public/images/icon-nav-movies.svg';
import tv from '@/public/images/icon-nav-tv-series.svg';
import bookmarks from '@/public/images/icon-nav-bookmark.svg';
import avatar from '@/public/images/image-avatar.png';
import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const Header = () => {
	return (
		<header className='bg-blueTertiary px-7 py-9 flex flex-col justify-start items-center rounded-[20px] h-full'>
			<Image src={logo} alt='Streamer Logo' className='mb-[75px]' />
			<nav className='flex flex-col justify-between items-center gap-10 mb-auto'>
				<Link href='#'>
					<Image src={home} alt='Grid Blocks Icon' className='icon' />
				</Link>
				<Link href='#'>
					<Image src={movies} alt='Film Strip Icon' className='icon' />
				</Link>
				<Link href='#'>
					<Image src={tv} alt='Television Set Icon' className='icon' />
				</Link>
				<Link href='#'>
					<Image src={bookmarks} alt='Bookmark Ribbon Icon' className='icon' />
				</Link>
			</nav>
			<Image
				src={avatar}
				alt='User Headshot'
				className='border-[1px] border-white rounded-full'
			/>
		</header>
	);
};

export default Header;
