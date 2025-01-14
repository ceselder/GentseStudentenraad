import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/Prisma";
import { type Rules } from "@prisma/client";

export const prerender = false;
export const ssr = true;
export const csr = true;

export const load = (async ({ locals }) => {
    const rules: Rules[] = await prisma.rules.findMany({
        where: {
            organization: locals.configuration.organization,
        },
    });

    return {
        rules,
    };
}) satisfies PageServerLoad;
