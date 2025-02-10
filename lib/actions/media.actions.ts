'use server';
import { prisma } from '@/db/db';

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
