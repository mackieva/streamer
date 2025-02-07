const sampleData = {
	media: [
		{
			title: 'Beyond Earth',
			thumbnail: {
				trending: {
					small:
						'/images/selections/thumbnails/beyond-earth/trending/small.jpg',
					large:
						'/images/selections/thumbnails/beyond-earth/trending/large.jpg',
				},
				regular: {
					small: '/images/selections/thumbnails/beyond-earth/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/beyond-earth/regular/medium.jpg',
					large: '/images/selections/thumbnails/beyond-earth/regular/large.jpg',
				},
			},
			year: 2019,
			category: 'Movie',
			rating: 'PG',
			isTrending: true,
		},
		{
			title: 'Bottom Gear',
			thumbnail: {
				trending: {
					small: '/images/selections/thumbnails/bottom-gear/trending/small.jpg',
					large: '/images/selections/thumbnails/bottom-gear/trending/large.jpg',
				},
				regular: {
					small: '/images/selections/thumbnails/bottom-gear/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/bottom-gear/regular/medium.jpg',
					large: '/images/selections/thumbnails/bottom-gear/regular/large.jpg',
				},
			},
			year: 2021,
			category: 'Movie',
			rating: 'PG',
			isTrending: true,
		},
		{
			title: 'Undiscovered Cities',
			thumbnail: {
				trending: {
					small:
						'/images/selections/thumbnails/undiscovered-cities/trending/small.jpg',
					large:
						'/images/selections/thumbnails/undiscovered-cities/trending/large.jpg',
				},
				regular: {
					small:
						'/images/selections/thumbnails/undiscovered-cities/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/undiscovered-cities/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/undiscovered-cities/regular/large.jpg',
				},
			},
			year: 2019,
			category: 'TV Series',
			rating: 'E',
			isTrending: true,
		},
		{
			title: '1998',
			thumbnail: {
				trending: {
					small: '/images/selections/thumbnails/1998/trending/small.jpg',
					large: '/images/selections/thumbnails/1998/trending/large.jpg',
				},
				regular: {
					small: '/images/selections/thumbnails/1998/regular/small.jpg',
					medium: '/images/selections/thumbnails/1998/regular/medium.jpg',
					large: '/images/selections/thumbnails/1998/regular/large.jpg',
				},
			},
			year: 2021,
			category: 'Movie',
			rating: '18+',
			isTrending: true,
		},
		{
			title: 'Dark Side of the Moon',
			thumbnail: {
				trending: {
					small:
						'/images/selections/thumbnails/dark-side-of-the-moon/trending/small.jpg',
					large:
						'/images/selections/thumbnails/dark-side-of-the-moon/trending/large.jpg',
				},
				regular: {
					small:
						'/images/selections/thumbnails/dark-side-of-the-moon/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/dark-side-of-the-moon/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/dark-side-of-the-moon/regular/large.jpg',
				},
			},
			year: 2018,
			category: 'TV Series',
			rating: 'PG',
			isTrending: true,
		},
		{
			title: 'The Great Lands',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/the-great-lands/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/the-great-lands/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/the-great-lands/regular/large.jpg',
				},
			},
			year: 2019,
			category: 'Movie',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'The Diary',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/the-diary/regular/small.jpg',
					medium: '/images/selections/thumbnails/the-diary/regular/medium.jpg',
					large: '/images/selections/thumbnails/the-diary/regular/large.jpg',
				},
			},
			year: 2019,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Earth’s Untouched',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/earths-untouched/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/earths-untouched/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/earths-untouched/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'No Land Beyond',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/no-land-beyond/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/no-land-beyond/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/no-land-beyond/regular/large.jpg',
				},
			},
			year: 2019,
			category: 'Movie',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'During the Hunt',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/during-the-hunt/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/during-the-hunt/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/during-the-hunt/regular/large.jpg',
				},
			},
			year: 2016,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Autosport the Series',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/autosport-the-series/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/autosport-the-series/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/autosport-the-series/regular/large.jpg',
				},
			},
			year: 2016,
			category: 'TV Series',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'Same Answer II',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/same-answer-2/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/same-answer-2/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/same-answer-2/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'Below Echo',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/below-echo/regular/small.jpg',
					medium: '/images/selections/thumbnails/below-echo/regular/medium.jpg',
					large: '/images/selections/thumbnails/below-echo/regular/large.jpg',
				},
			},
			year: 2016,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'The Rockies',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/the-rockies/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/the-rockies/regular/medium.jpg',
					large: '/images/selections/thumbnails/the-rockies/regular/large.jpg',
				},
			},
			year: 2015,
			category: 'TV Series',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'Relentless',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/relentless/regular/small.jpg',
					medium: '/images/selections/thumbnails/relentless/regular/medium.jpg',
					large: '/images/selections/thumbnails/relentless/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Community of Ours',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/community-of-ours/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/community-of-ours/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/community-of-ours/regular/large.jpg',
				},
			},
			year: 2018,
			category: 'TV Series',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'Van Life',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/van-life/regular/small.jpg',
					medium: '/images/selections/thumbnails/van-life/regular/medium.jpg',
					large: '/images/selections/thumbnails/van-life/regular/large.jpg',
				},
			},
			year: 2015,
			category: 'Movie',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'The Heiress',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/the-heiress/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/the-heiress/regular/medium.jpg',
					large: '/images/selections/thumbnails/the-heiress/regular/large.jpg',
				},
			},
			year: 2021,
			category: 'Movie',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Off the Track',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/off-the-track/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/off-the-track/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/off-the-track/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'Whispering Hill',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/whispering-hill/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/whispering-hill/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/whispering-hill/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: 'E',
			isTrending: false,
		},
		{
			title: '112',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/112/regular/small.jpg',
					medium: '/images/selections/thumbnails/112/regular/medium.jpg',
					large: '/images/selections/thumbnails/112/regular/large.jpg',
				},
			},
			year: 2013,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Lone Heart',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/lone-heart/regular/small.jpg',
					medium: '/images/selections/thumbnails/lone-heart/regular/medium.jpg',
					large: '/images/selections/thumbnails/lone-heart/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'Production Line',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/production-line/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/production-line/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/production-line/regular/large.jpg',
				},
			},
			year: 2018,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Dogs',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/dogs/regular/small.jpg',
					medium: '/images/selections/thumbnails/dogs/regular/medium.jpg',
					large: '/images/selections/thumbnails/dogs/regular/large.jpg',
				},
			},
			year: 2016,
			category: 'TV Series',
			rating: 'E',
			isTrending: false,
		},
		{
			title: 'Asia in 24 Days',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/asia-in-24-days/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/asia-in-24-days/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/asia-in-24-days/regular/large.jpg',
				},
			},
			year: 2020,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'The Tasty Tour',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/the-tasty-tour/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/the-tasty-tour/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/the-tasty-tour/regular/large.jpg',
				},
			},
			year: 2016,
			category: 'TV Series',
			rating: 'PG',
			isTrending: false,
		},
		{
			title: 'Darker',
			thumbnail: {
				regular: {
					small: '/images/selections/thumbnails/darker/regular/small.jpg',
					medium: '/images/selections/thumbnails/darker/regular/medium.jpg',
					large: '/images/selections/thumbnails/darker/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'Unresolved Cases',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/unresolved-cases/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/unresolved-cases/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/unresolved-cases/regular/large.jpg',
				},
			},
			year: 2018,
			category: 'TV Series',
			rating: '18+',
			isTrending: false,
		},
		{
			title: 'Mission: Saturn',
			thumbnail: {
				regular: {
					small:
						'/images/selections/thumbnails/mission-saturn/regular/small.jpg',
					medium:
						'/images/selections/thumbnails/mission-saturn/regular/medium.jpg',
					large:
						'/images/selections/thumbnails/mission-saturn/regular/large.jpg',
				},
			},
			year: 2017,
			category: 'Movie',
			rating: 'PG',
			isTrending: false,
		},
	],
};

export default sampleData;
