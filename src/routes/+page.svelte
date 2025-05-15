<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { TreadMillConnection, getTreadMillConnection } from '$lib/TreadMillConnection.svelte';
	import RunPlanDescription from '$lib/RunPlanDescription.svelte';
	import { runPlans } from '$lib/store.svelte';
	const connection: TreadMillConnection = getTreadMillConnection();

	function gotoRunPlan(uuid: string) {
		connection.connect();
		goto(`${base}/run/${uuid}`);
	}
</script>

<div class="verticalListWithGap">
	{#each runPlans as plan}
		<button onclick={() => gotoRunPlan(plan.uuid)}>
			<RunPlanDescription runPlan={plan} />
		</button>
	{/each}
</div>

<style>
	.verticalListWithGap {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
