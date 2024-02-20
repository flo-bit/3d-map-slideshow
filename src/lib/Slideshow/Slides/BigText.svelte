<script>
	import Slide from '../Slide.svelte';
	import { twMerge } from 'tailwind-merge';

	export let index = 0;

	let classes = '';

	export { classes as class };
</script>

<Slide
	{index}
	class={twMerge(
		'text-[12vw] flex justify-center items-center font-semibold text-center px-10',
		classes
	)}
>
	<div class="line-clamp-2">
		<slot />
	</div>
</Slide>
