import { RunPlan, Segment} from '$lib/RunPlan';

export let currentRunPlan = $state(new RunPlan([
    new Segment(5,2),
    new Segment(3,2),
    new Segment(1,6),
    new Segment(3,2),
    new Segment(1,6),
    new Segment(3,2),
    new Segment(1,6),
    new Segment(3,2),
    new Segment(1,6),
    new Segment(3,2),
    new Segment(1,6),
    new Segment(5,2),
]));
