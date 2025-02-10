'use client';
import bookmarkIcon from '@/public/images/icon-bookmark-empty.svg';
import Image from 'next/image';
import { createBookmark } from '@/lib/actions/media.actions';
import { useActionState } from 'react';

const MediaBookmark = ({ id }: { id: string }) => {
	const [state, formAction] = useActionState(createBookmark.bind(null, id), {
		message: '',
	});
	return (
		<form action={formAction}>
			<button className='rounded-full bookmark-btn' type='submit'>
				<Image src={bookmarkIcon} alt='Bookmark Icon' width={12} height={14} />
			</button>
		</form>
	);
};

export default MediaBookmark;
