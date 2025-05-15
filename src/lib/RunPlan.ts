export class Segment {
    constructor(readonly duration: number, readonly speed: number) {
    }
}

export class RunPlan{
    segments: Segment[];

    constructor(semgents: Segment[]) {
        this.segments = semgents;
    }

    getCurrentSpeed(runTime: number) {
        let segmentStartTime = 0;
        for(let segment of this.segments) {
            segmentStartTime += segment.duration;
            if(runTime / 60 < segmentStartTime) {
                return segment.speed;
            }
        }
        return 0;
    }

    get totalTime(){
        return this.segments.reduce((acc, segment) => acc + segment.duration, 0) * 60;
    }

    get totalDistance(){
        return this.segments.reduce((acc, segment) => acc + segment.speed * segment.duration / 60, 0) * 1000;
    }
}
