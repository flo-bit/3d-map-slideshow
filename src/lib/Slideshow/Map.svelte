<script lang="ts">
	import { onMount } from 'svelte';

	import 'mapbox-gl/dist/mapbox-gl.css';
	import mapboxgl from 'mapbox-gl';

	let map: mapboxgl.Map;
	let mapElement: HTMLDivElement;

	onMount(async () => {
		console.log('mounted');

		mapboxgl.accessToken =
			'pk.eyJ1IjoiaGltYXkxOTkwIiwiYSI6ImNqcTlyNnl1djBsZjU0Mm9naWk1eGtuMWoifQ.6HBtoXXQFX_JAEelXIeE9w';
		map = new mapboxgl.Map({
			container: 'map',
			center,
			zoom,
			bearing,
			pitch
			//interactive: false
		});

		map.on('load', () => {
			// @ts-ignore
			map.setConfigProperty('basemap', 'lightPreset', 'dawn');
			// @ts-ignore
			map.setConfigProperty('basemap', 'showPointOfInterestLabels', false);
			// @ts-ignore
			map.setConfigProperty('basemap', 'showPlaceLabels', false);
			// @ts-ignore
			map.setConfigProperty('basemap', 'showRoadLabels', false);
			// @ts-ignore
			map.setConfigProperty('basemap', 'showTransitLabels', false);

			// show map
			setTimeout(() => {
				mapElement.classList.remove('invisible');
			}, 200);
		});
	});

	export let moving = false;

	export let flyEnd = () => {
		console.log('flyEnd');
	};

	export const flyTo = ({
		center,
		zoom,
		bearing,
		pitch
	}: {
		center: [number, number];
		zoom: number;
		bearing: number;
		pitch: number;
	}) => {
		if (map) {
			map.flyTo({ center, zoom, bearing, pitch, speed: 2 });
			moving = true;
			map.once('moveend', () => {
				moving = false;
				flyEnd();
			});
		}
	};

	export let center: [number, number];
	export let zoom = 10;
	export let bearing = 0;
	export let pitch = 0;

	$: flyTo({ center, zoom, bearing, pitch });
</script>

<div id="map" bind:this={mapElement} class="w-full h-full invisible"></div>
