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

export async function updateBookmarkAction(mediaId: string) {
	const session = await auth();
	const userId = session?.user?.id as string;

	if (!session) throw new Error('User not found');

	const bookmark = await prisma.bookmarks.findFirst({
		where: {
			userId: userId,
			mediaId: mediaId,
		},
	});

	if (!bookmark) {
		try {
			await prisma.bookmarks.create({
				data: {
					userId,
					mediaId,
				},
			});
		} catch (e) {
			console.log({ message: `Error: ${e}` });
		}
	} else {
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
	}

	revalidatePath('/bookmarks');
}

export async function getBookmarkedMedia() {
	const session = await auth();
	const userId = session?.user?.id as string;

	const bookmarked = await prisma.media.findMany({
		where: {
			bookmarks: {
				some: { userId: userId },
			},
		},
		omit: {
			isTrending: true,
		},
	});

	return bookmarked;
}

export async function getSearchedMedia(query: string) {
	const media = await prisma.media.findMany({
		where: {
			title: {
				contains: query,
				mode: 'insensitive',
			},
		},
	});

	return media;
}
