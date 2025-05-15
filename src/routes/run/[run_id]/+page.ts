import type { PageLoad } from './$types';
export const load: PageLoad = ({ params }) => {
    return {runID: params.run_id};
};
