import searchIcon from '@/public/images/icon-search.svg';
import Image from 'next/image';

const SearchBar = () => {
	return (
		<div>
			<Image src={searchIcon} alt='Magnifying Glass Icon' />
		</div>
	);
};

export default SearchBar;
