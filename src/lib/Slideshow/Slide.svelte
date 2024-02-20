<script lang="ts">
	import { fade } from 'svelte/transition';
	import { visibleSlideIndex } from './store';
	import { twMerge } from 'tailwind-merge';

	export let index = 0;
	$: visible = $visibleSlideIndex === index;

	let classes = '';

	export { classes as class };
</script>

{#if visible}
	<div transition:fade class={twMerge('absolute w-full h-full overflow-hidden', classes)}>
		<slot />
	</div>
{/if}
