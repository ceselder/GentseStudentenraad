import { prisma } from '$lib/Prisma';
import type { PageServerLoad } from './$types';

export const prerender = false;
export const ssr = false;
export const csr = true;

export const load = (async ({ params }) => {
	const _ = params.language; // SVELTEKIT BUG, DO NOT REMOVE

	const news_item = await prisma.news.findUniqueOrThrow({
		where: {
			id: parseInt(params.id)
		}
	});

	return {
		news_item
	};
}) satisfies PageServerLoad;
