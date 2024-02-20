<script lang="ts">
	import Slide from '../Slide.svelte';
	import { twMerge } from 'tailwind-merge';

	export let index = 0;

	let classes = '';

	export { classes as class };

	export let image: string;
</script>

<Slide {index} class={twMerge('grid md:grid-cols-6 grid-rows-6', classes)}>
	<div class="row-span-4 md:row-span-6 md:col-span-4">
		<slot />
	</div>
	<div class="row-span-2 md:row-span-6 md:col-span-2 m-4">
		<img src={image} alt="" class="rounded-md w-full h-full object-cover" />
	</div>
</Slide>
