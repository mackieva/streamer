'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
	const [query, setQuery] = useState('');
	const searchParams = useSearchParams();
	const router = useRouter();

	console.log(query);

	function handleSubmit() {
		const search = new URLSearchParams(searchParams);
		search.set('query', query);
		router.push(`/search?${search}`);
	}

	return (
		<form className='w-full' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search for movies'
				className='heading-m w-full py-4 ml-6'
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
};

export default Search;
