'use server';
import { createBookmarkSchema } from '../validators';
import { prisma } from '@/db/db';
import { auth } from '@/auth';

export async function getAllMedia() {
	const media = await prisma.media.findMany({
		orderBy: {
			year: 'desc',
		},
	});
	return media;
}

export async function getTelevisionMedia() {
	const media = await prisma.media.findMany({
		orderBy: {
			year: 'desc',
		},
		where: {
			category: 'TV Series',
		},
	});

	return media;
}

export async function getMoviesMedia() {
	const media = await prisma.media.findMany({
		orderBy: {
			year: 'desc',
		},
		where: {
			category: 'Movie',
		},
	});

	return media;
}

export async function createBookmark(mediaId: string, prevState: unknown) {
	const session = await auth();
	const userId = session?.user?.id as string;

	if (!userId) throw new Error('User not found');
	try {
		await prisma.bookmarks.create({
			data: {
				userId,
				mediaId,
			},
		});
	} catch (e) {
		console.log({ message: `${e}` });
		return { message: `${e}` };
	}

	return {
		message: 'Bookmark updated',
	};
}

export async function removeBookmark(mediaId: string, prevState: unknown) {
	const session = await auth();
	const userId = session?.user?.id as string;

	if (!userId) throw new Error('User not found');

	const bookmark = await prisma.bookmarks.findFirst({
		where: {
			userId: userId,
			mediaId: mediaId,
		},
	});

	await prisma.bookmarks.delete({
		where: {
			id: bookmark?.id,
		},
	});

	return {
		message: 'Bookmark updated',
	};
}
