'use client';
import logo from '@/public/images/logo.svg';
import home from '@/public/images/icon-nav-home.svg';
import movies from '@/public/images/icon-nav-movies.svg';
import tv from '@/public/images/icon-nav-tv-series.svg';
import bookmarks from '@/public/images/icon-nav-bookmark.svg';
import avatar from '@/public/images/image-avatar.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import './header.css';

const Header = () => {
	const path = usePathname();
	return (
		<header className='flex lg:flex-col justify-between lg:justify-start items-center bg-blueTertiary lg:m-0 md:mx-8 md:mt-8 mb-8 lg:px-7 lg:py-9 p-4 md:p-6 rounded-[10px] md:rounded-[20px] lg:h-[92vh]'>
			<Image src={logo} alt='Streamer Logo' className='lg:mb-[75px]' />
			<nav className='flex lg:flex-col justify-between items-center gap-8 lg:gap-10 lg:mb-auto'>
				<Link href='/'>
					<Image
						src={home}
						alt='Grid Blocks Icon'
						className={cn(`icon`, path === '/' ? 'active' : '')}
					/>
				</Link>
				<Link href='/movies'>
					<Image
						src={movies}
						alt='Film Strip Icon'
						className={cn(`icon`, path.includes('movies') ? 'active' : '')}
					/>
				</Link>
				<Link href='/tv'>
					<Image
						src={tv}
						alt='Television Set Icon'
						className={cn(`icon`, path.includes('tv') ? 'active' : '')}
					/>
				</Link>
				<Link href='/bookmarks'>
					<Image
						src={bookmarks}
						alt='Bookmark Ribbon Icon'
						className={cn(`icon`, path.includes('bookmarks') ? 'active' : '')}
					/>
				</Link>
			</nav>
			<Image
				src={avatar}
				alt='User Headshot'
				className='border-[1px] border-white rounded-full w-8 h-8'
			/>
		</header>
	);
};

export default Header;
