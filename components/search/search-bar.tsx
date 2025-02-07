import searchIcon from '@/public/images/icon-search.svg';
import Search from './search-field';
import Image from 'next/image';

const SearchBar = () => {
	return (
		<div className='mb-5 mr-4 flex justify-start items-center'>
			<Image src={searchIcon} alt='Magnifying Glass Icon' />
			<Search />
		</div>
	);
};

export default SearchBar;
