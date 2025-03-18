'use client';
import bookmarkIcon from '@/public/images/icon-bookmark-empty.svg';
import bookmarkIconActive from '@/public/images/icon-bookmark-full.svg';
import Image from 'next/image';
import { updateBookmarkAction } from '@/lib/actions/media.actions';
import { useEffect, useState } from 'react';

interface Bookmarks {
	id: string;
	userId: string;
	mediaId: string;
}

const MediaBookmark = ({
	id,
	bookmarks,
}: {
	id: string;
	bookmarks: Bookmarks[] | undefined;
}) => {
	const [status, setStatus] = useState(false);

	const updateBookmarkActionWitBind = updateBookmarkAction.bind(null, id);

	useEffect(() => {
		if (bookmarks?.find((b) => b.mediaId === id)) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	}, [bookmarks, id]);

	return (
		<form action={updateBookmarkActionWitBind}>
			<button
				className='rounded-full bookmark-btn'
				type='submit'
				onClick={() => setStatus(!status)}
			>
				<Image
					src={status ? bookmarkIconActive : bookmarkIcon}
					alt='Bookmark Icon'
					width={12}
					height={14}
				/>
			</button>
		</form>
	);
};

export default MediaBookmark;
