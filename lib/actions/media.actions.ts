'use server';
import { prisma } from '@/db/db';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

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

export async function getUserBookmarks() {
	const session = await auth();
	const userId = session?.user?.id as string;

	if (!userId) throw new Error('User not found');

	const bookmarks = await prisma.user.findFirst({
		where: {
			id: userId,
		},
		select: {
			bookmarks: true,
		},
	});
	if (!bookmarks) return;

	return bookmarks?.bookmarks;
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
		console.log({ message: `Error: ${e}` });
		return { message: `${e}` };
	}

	return {
		message: 'Bookmark updated',
		bookmarked: true,
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

export async function getBookmarkedMedia() {
	const session = await auth();
	const userId = session?.user?.id as string;

	// const bookmarked = await prisma.media.findMany({
	// 	where: {
	// 		bookmarks: {
	// 			some: {},
	// 		},
	// 	},
	// 	include: {
	// 		bookmarks: true,
	// 	},
	// });

	const bookmarked = await prisma.media.findMany({
		where: {
			bookmarks: {
				some: { userId: userId },
			},
		},
	});

	return bookmarked;
}
