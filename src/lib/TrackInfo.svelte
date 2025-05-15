<script lang="ts">
	import { onMount } from 'svelte';
	import { TreadMillConnection, getTreadMillConnection } from '$lib/TreadMillConnection.svelte';
	import { currentRunPlan } from '$lib/store.svelte';

	const connection: TreadMillConnection = getTreadMillConnection();
	const splits = $derived(
		currentRunPlan.segments.map((seg) => ({
			label: seg.speed > 5 ? 'Run' : 'Walk',
			duration: seg.duration,
			speed: seg.speed,
			color: seg.speed > 5 ? '#F87171' : '#60A5FA'
		}))
	);

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	function resizeCanvas() {
		canvas.width = window.innerWidth - 64;
		canvas.height = canvas.width / 3;
		draw();
	}
	onMount(() => {
		ctx = canvas.getContext('2d');
		if (!ctx) {
			console.error('Failed to get canvas context');
			return;
		}
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
	});

	const padding = 40;
	const paddingBottom = 30;

	function draw() {
		if (!canvas) return;
		const totalDuration = splits.reduce((acc, split) => acc + split.duration, 0);
		const maxSpeed = Math.max(...splits.map((s) => s.speed));
		const width = canvas.width;
		const height = canvas.height;
		const paddingLeft = padding;
		const paddingRight = padding;
		const paddingTop = padding;
		const graphWidth = width - paddingLeft - paddingRight;
		const graphHeight = height - paddingTop - paddingBottom;

		ctx.clearRect(0, 0, width, height);

		ctx.strokeStyle = '#444';
		ctx.fillStyle = 'white';
		ctx.font = '10px sans-serif';
		ctx.textAlign = 'right';

		const yTicks = 4;
		for (let i = 0; i <= yTicks; i++) {
			const y = paddingTop + graphHeight - (i / yTicks) * graphHeight;
			const speed = (i / yTicks) * maxSpeed;
			ctx.beginPath();
			ctx.moveTo(paddingLeft, y);
			ctx.lineTo(width - paddingRight, y);
			ctx.stroke();
			ctx.fillText(speed.toFixed(1), paddingLeft - 6, y + 3);
		}

		let currentX = paddingLeft;
		splits.forEach((split) => {
			const splitWidth = (split.duration / totalDuration) * graphWidth;
			const splitHeight = (split.speed / maxSpeed) * graphHeight;
			const y = paddingTop + graphHeight - splitHeight;

			ctx.fillStyle = split.color;
			ctx.fillRect(currentX, y, splitWidth, splitHeight);

			ctx.fillStyle = 'white';
			ctx.font = '12px sans-serif';
			ctx.textAlign = 'center';
			ctx.fillText(split.label, currentX + splitWidth / 2, y - 4);

			currentX += splitWidth;
		});

		const progress = Math.min(connection.currentData.elapsedTime / (totalDuration * 60), 1);
		const progressX = paddingLeft + graphWidth * progress;

		ctx.strokeStyle = '#22C55E';
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(progressX, paddingTop);
		ctx.lineTo(progressX, paddingTop + graphHeight);
		ctx.stroke();

		ctx.fillStyle = 'white';
		ctx.font = '10px sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText('0 min', paddingLeft, height - 6);
		ctx.fillText(`${totalDuration} min`, width - paddingRight, height - 6);
	}

	setInterval(() => {
		draw();
	}, 1000);
</script>

<div class="container">
	<canvas bind:this={canvas}></canvas>
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
