import { prisma } from '$lib/Prisma';
import type { PageServerLoad } from './$types';
export const prerender = false;
export const ssr = false;
export const csr = true;

export const load = (async ({ params, locals, url }) => {
	const _ = params.language; // SVELTEKIT BUG, DO NOT REMOVE

	const text = await prisma.i18n.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	return {
		text
	};
}) satisfies PageServerLoad;