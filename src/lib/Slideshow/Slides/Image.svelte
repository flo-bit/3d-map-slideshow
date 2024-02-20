<script lang="ts">
	import Slide from '../Slide.svelte';
	import { twMerge } from 'tailwind-merge';

	export let index = 0;

	let classes = '';

	export { classes as class };

	export let image: string;
</script>

<Slide {index} class={twMerge('p-10', classes)}>
	<img src={image} alt="" class="rounded-md w-full h-full object-cover" />
</Slide>
