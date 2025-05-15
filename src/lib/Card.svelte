<script lang="ts">
	let props = $props();
	let fontSize = $derived(props.value2 ? '1.2em' : '2.5em');
</script>

<div class="container">
	<div class="title">{props.title}</div>
	<div class="value" style="font-size: {fontSize}">{props.value}</div>
	{#if props.value2}
		<div class="value" style="font-size: {fontSize}">{props.value2}</div>
	{/if}
	<div class="unit">{props.unit}</div>
</div>

<style>
	.container {
		background: var(--bg-3);
		border-radius: var(--border-radius);
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-width: 6em;
	}
	.title {
		color: var(--fg-2);
		text-transform: uppercase;
		text-align: center;
	}
	.value {
		color: var(--fg-1);
		font-weight: bold;
		line-height: 1;
	}
	.unit {
		color: var(--fg-3);
		text-align: center;
		line-height: 1;
	}
</style>
