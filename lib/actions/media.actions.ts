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
