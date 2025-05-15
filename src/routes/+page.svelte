<script lang="ts">
	import { TreadMillConnection, getTreadMillConnection } from '$lib/TreadMillConnection.svelte';
	import { currentRunPlan } from '$lib/store.svelte';
	import RunInfo from '$lib/RunInfo.svelte';
	import TrackInfo from '$lib/TrackInfo.svelte';
	const connection: TreadMillConnection = getTreadMillConnection();

	function handlePen() {
		connection.connect();
	}

	$effect(() => {
		if (!connection.connected || connection.currentData.speed <= 0) return;
		const time = connection.currentData.elapsedTime;
		const speed = currentRunPlan.getCurrentSpeed(time);
		console.log(speed, connection.currentData.speed);
		if (connection.currentData.speed !== speed) {
			if (speed > 0) {
				connection.setSpeed(speed);
			} else {
				connection.pause();
			}
		}
	});
</script>

{#if !connection.connected}
	<button on:click={handlePen}> ASD</button>
{/if}
<RunInfo />
<TrackInfo />
