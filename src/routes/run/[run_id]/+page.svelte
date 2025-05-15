<script lang="ts">
	import { TreadMillConnection, getTreadMillConnection } from '$lib/TreadMillConnection.svelte';
	import RunInfo from '$lib/RunInfo.svelte';
	import RunPlanVisualizer from '$lib/RunPlanVisualizer.svelte';
	import { runPlans } from '$lib/store.svelte';
	import type { PageProps } from './$types';

	const connection: TreadMillConnection = getTreadMillConnection();
	let { data }: PageProps = $props();

	const currentRunPlan = runPlans.find((plan) => plan.uuid === data.runID);

	$effect(() => {
		if (!connection.connected || connection.currentData.speed <= 0) return;
		const time = connection.currentData.elapsedTime;
		const speed = currentRunPlan.getCurrentSpeed(time);
		if (connection.currentData.speed !== speed) {
			if (speed > 0) {
				connection.setSpeed(speed);
			} else {
				connection.pause();
			}
		}
	});
</script>

<RunInfo runPlan={currentRunPlan} />
<div class="container">
	<RunPlanVisualizer runPlan={currentRunPlan} elapsedTime={connection.currentData.elapsedTime} />
</div>

<style>
	.container {
		aspect-ratio: 3 / 1;
		width: 97vw;
		display: block;
		padding-left: 1rem;
		padding-right: 1rem;
		box-sizing: border-box;
		background: var(--bg-2);
		border-radius: var(--border-radius);
	}
</style>
