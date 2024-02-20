<script lang="ts">
	import type { MapPosition } from '.';
	import Map from './Map.svelte';

	import { visibleSlideIndex } from './store';

	export let positions: MapPosition[];

	let center: [number, number] = positions[0].center;
	let zoom = positions[0].zoom;
	let bearing = positions[0].bearing;
	let pitch = positions[0].pitch;

	let timeout: number;

	let currentSlideIndex = 0;

	export const changeSlide = (i: number) => {
		if (i < 0 || i > positions.length - 1 || moving) return;

		clearTimeout(timeout);

		center = positions[i].center;
		zoom = positions[i].zoom;
		bearing = positions[i].bearing;
		pitch = positions[i].pitch;

		currentSlideIndex = i;
		$visibleSlideIndex = -1;
	};

	export const previousSlide = () => {
		changeSlide(currentSlideIndex - 1);
	};
	export const nextSlide = () => {
		changeSlide(currentSlideIndex + 1);
	};

	let moving = false;

	let flyEnd = () => {
		$visibleSlideIndex = currentSlideIndex;
	};

	export let buttons = false;

	export let keyEvents = true;
</script>

<svelte:window
	on:keydown={(e) => {
		if (!keyEvents) return;

		if (e.key === 'ArrowRight') nextSlide();
		if (e.key === 'ArrowLeft') previousSlide();
	}}
/>

<div class="w-screen h-screen fixed">
	<Map {center} {zoom} {bearing} {pitch} bind:moving {flyEnd} />
</div>

<div class="inset-0 h-screen w-screen relative pointer-events-none">
	<slot />
</div>

{#if buttons}
	<div class="fixed inset-0 flex items-center justify-between pointer-events-none">
		{#if currentSlideIndex > 0}
			<button
				class="p-2 bg-white/50 backdrop-blur-sm rounded-md m-4 text-xl font-semibold ring-1 ring-white/70 shadow-md pointer-events-auto"
				on:click={previousSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
				</svg>
			</button>
		{:else}
			<div></div>
		{/if}

		{#if currentSlideIndex < positions.length - 1}
			<button
				class="p-2 bg-white/50 backdrop-blur-sm rounded-md m-4 text-xl font-semibold ring-1 ring-white/70 shadow-md pointer-events-auto"
				on:click={nextSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</button>
		{:else}
			<div></div>
		{/if}
	</div>
{/if}
