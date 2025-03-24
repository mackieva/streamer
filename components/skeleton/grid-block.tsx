const GridBlockSkeleton = () => {
	return (
		<div className='gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			<div className='bg-gray-200 w-full h-28 rounded-3xl animate-pulse '></div>
			<div className='bg-gray-200 w-full h-28 rounded-3xl animate-pulse '></div>
			<div className='bg-gray-200 w-full h-28 rounded-3xl animate-pulse '></div>
			<div className='bg-gray-200 w-full h-28 rounded-3xl animate-pulse '></div>
		</div>
	);
};

export default GridBlockSkeleton;
