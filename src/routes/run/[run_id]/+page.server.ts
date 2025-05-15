import { runPlans } from '$lib/store.svelte';
import type { EntryGenerator } from './$types';


export const prerender = true;
export const entries: EntryGenerator = () => {
    return runPlans.map(plan => ({run_id: plan.uuid}));
}

