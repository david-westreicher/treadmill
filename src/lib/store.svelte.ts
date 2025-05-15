import { RunPlan, Segment} from '$lib/RunPlan';

const WALK = 2
const RUN = 7

export const runPlans = [
    new RunPlan(
        "Couch to 5k - day 1",
        "023ui123-1234-1234-1234-123456789012",
        [
            new Segment(5, WALK),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(5, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 2",
        "ui123-1234-1234-1234-123456789011",
        [
            new Segment(5, WALK),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(3, WALK),
            new Segment(1,RUN),
            new Segment(5, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 3",
        "ui123-1234-1234-1234-123456789010",
        [
            new Segment(5, WALK),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(5, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 4",
        "ui123-1234-1234-1234-123456789009",
        [
            new Segment(4, WALK),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(2.5, WALK),
            new Segment(1.5,RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 5",
        "ui123-1234-1234-1234-123456789008",
        [
            new Segment(4, WALK),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 6",
        "ui123-1234-1234-1234-123456789007",
        [
            new Segment(4, WALK),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(6,RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 7",
        "ui123-1234-1234-1234-123456789006",
        [
            new Segment(4, WALK),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(2, WALK),
            new Segment(2,RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 8",
        "ui123-1234-1234-1234-123456789005",
        [
            new Segment(4, WALK),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 9",
        "ui123-1234-1234-1234-123456789004",
        [
            new Segment(4, WALK),
            new Segment(2 * 60 / RUN, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 10",
        "ui123-1234-1234-1234-123456789003",
        [
            new Segment(4, WALK),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(1.5, WALK),
            new Segment(2.5, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 11",
        "ui123-1234-1234-1234-123456789002",
        [
            new Segment(4, WALK),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(1, WALK),
            new Segment(3, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 12",
        "ui123-1234-1234-1234-123456789001",
        [
            new Segment(4, WALK),
            new Segment(3 * 60 / RUN, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 13",
        "ui123-1234-1234-1234-123456788000",
        [
            new Segment(4, WALK),
            new Segment(1, WALK),
            new Segment(5, RUN),
            new Segment(1, WALK),
            new Segment(5, RUN),
            new Segment(1, WALK),
            new Segment(5, RUN),
            new Segment(1, WALK),
            new Segment(5, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 14",
        "ui123-1234-1234-1234-123456788001",
        [
            new Segment(4, WALK),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 15",
        "ui123-1234-1234-1234-123456788002",
        [
            new Segment(4, WALK),
            new Segment(4 * 60 / RUN, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 16",
        "ui123-1234-1234-1234-123456788003",
        [
            new Segment(4, WALK),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(1, WALK),
            new Segment(7, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 17",
        "ui123-1234-1234-1234-123456788004",
        [
            new Segment(4, WALK),
            new Segment(1, WALK),
            new Segment(10, RUN),
            new Segment(1, WALK),
            new Segment(10, RUN),
            new Segment(1, WALK),
            new Segment(10, RUN),
            new Segment(4, WALK),
        ]
    ),
    new RunPlan(
        "Couch to 5k - day 18",
        "ui123-1234-1234-1234-123456788005",
        [
            new Segment(4, WALK),
            new Segment(5 * 60 / RUN, RUN),
            new Segment(4, WALK),
        ]
    ),
];
