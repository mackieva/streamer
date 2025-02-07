import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
	const prisma = new PrismaClient();
	await prisma.user.deleteMany();

	await prisma.media.createMany({ data: sampleData.media });

	console.log('Database seeded successfully.');
}

main();
