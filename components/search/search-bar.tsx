import searchIcon from '@/public/images/icon-search.svg';
import Search from './search-field';
import Image from 'next/image';

const SearchBar = () => {
	return (
		<div className='flex justify-start items-center mr-4 mb-8'>
			<Image src={searchIcon} alt='Magnifying Glass Icon' />
			<Search />
		</div>
	);
};

export default SearchBar;
