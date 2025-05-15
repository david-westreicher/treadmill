<script lang="ts">
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import { TreadMillConnection, getTreadMillConnection } from '$lib/TreadMillConnection.svelte';
	import { currentRunPlan } from '$lib/store.svelte';

	const connection: TreadMillConnection = getTreadMillConnection();
	const data = connection.currentData;

	let pace = $derived(data.distance <= 0 ? 0 : data.elapsedTime / (data.distance / 1000));
	const totalDistance = currentRunPlan.totalDistance;
	const totalTime = currentRunPlan.totalTime;

	function formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.round(seconds % 60);
		return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
	}

	function formatKM(distance: number): string {
		return (distance / 1000).toFixed(2);
	}

	function pause() {
		console.log('pause');
		connection.pause();
	}

	function start() {
		console.log('start');
		connection.start();
	}

	function handleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}
</script>

<div>
	<nav>
		<div class="nav-part">
			<Card title="Speed" value={data.speed} unit="km/h" />
			<Card title="Pace" value={formatTime(pace)} unit="min/km" />
			<Card
				title="Distance"
				value={formatKM(data.distance)}
				value2={formatKM(totalDistance)}
				unit="km"
			/>
			<Card
				title="Time"
				value={formatTime(data.elapsedTime)}
				value2={formatTime(totalTime)}
				unit="min"
			/>
			<Card title="Calories" value={data.kcal} unit="kcal" />
			<div class="buttoncontainer">
				{#if connection.connected}
					{#if data.speed <= 0}
						<button style="background-color: var(--success);" onclick={start}>
							<Icon icon="mdi:play" />
						</button>
					{:else}
						<button style="background-color: var(--error);" onclick={pause}>
							<Icon icon="mdi:stop" />
						</button>
					{/if}
				{/if}
				<button onclick={handleFullscreen}>
					<Icon icon="mdi:fullscreen" />
				</button>
			</div>
		</div>
	</nav>
</div>

<style>
	nav {
		align-items: center;
		justify-content: center;
	}
	nav div {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.buttoncontainer {
		display: grid;
	}
	.buttoncontainer > button {
		width: 5em;
		height: 3em;
	}
</style>
