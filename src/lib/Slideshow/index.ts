export type MapPosition = {
	center: [number, number];
	zoom: number;
	pitch: number;
	bearing: number;
};

export { default as Slide } from './Slide.svelte';
export { default as Slideshow } from './Slideshow.svelte';

export { default as BigText } from './Slides/BigText.svelte';
export { default as ImageText } from './Slides/ImageText.svelte';
export { default as Image } from './Slides/Image.svelte';
