'use client';
import bookmarkIcon from '@/public/images/icon-bookmark-empty.svg';
import bookmarkIconActive from '@/public/images/icon-bookmark-full.svg';
import Image from 'next/image';
import { createBookmark, removeBookmark } from '@/lib/actions/media.actions';
import { useActionState } from 'react';
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
	useEffect(() => {
		if (bookmarks?.find((b) => b.mediaId === id)) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	}, [bookmarks, status]);
	const [addstate, formActionAdd] = useActionState(
		createBookmark.bind(null, id),
		{
			message: '',
		}
	);
	const [removestate, formActionRemove] = useActionState(
		removeBookmark.bind(null, id),
		{
			message: '',
		}
	);
	return (
		<form action={status ? formActionRemove : formActionAdd}>
			<button className='rounded-full bookmark-btn' type='submit'>
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
