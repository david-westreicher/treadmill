<script lang="ts">
	import RunPlanVisualizer from '$lib/RunPlanVisualizer.svelte';

	let { runPlan } = $props();
</script>

<div class="container">
	{runPlan.name}
	<RunPlanVisualizer {runPlan} />
</div>

<style>
</style>
