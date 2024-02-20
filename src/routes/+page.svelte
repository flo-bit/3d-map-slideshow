<script lang="ts">
	import { type MapPosition, Slideshow, BigText } from '$lib/Slideshow';

	let positions: MapPosition[] = [
		{
			// 40.7484° N, 73.9857° W
			// empire state building
			center: [-73.9857, 40.7484],
			zoom: 15.5,
			pitch: 75,
			bearing: 45
		},
		{
			// 40.7826° N, 73.9656° W
			// central park
			center: [-73.9656, 40.7826],
			zoom: 16,
			pitch: 80,
			bearing: 0
		},
		{
			// 40.6892° N, 74.0445° W
			// statue of liberty
			center: [-74.0445, 40.6892],
			zoom: 17.5,
			pitch: 60,
			bearing: 20
		},
		{
			// 34.1341° N, 118.3215° W
			// hollywood sign
			center: [-118.3215, 34.1341],
			zoom: 18,
			pitch: 60,
			bearing: 0
		},
		{
			// 51.5007° N, 0.1246° W
			// big ben
			center: [-0.1246, 51.5007],
			zoom: 17.5,
			pitch: 60,
			bearing: 90
		},
		{
			// 48.8584° N, 2.2945° E
			// eiffel tower
			center: [2.2945, 48.8584],
			zoom: 15.5,
			pitch: 60,
			bearing: -90
		},
		{
			// 41.8902° N, 12.4922° E
			// colosseum
			center: [12.4922, 41.8902],
			zoom: 18,
			pitch: 60,
			bearing: 0
		},
		{
			// 33.8568° S, 151.2153° E
			// sydney opera house
			center: [151.2153, -33.8568],
			zoom: 17.5,
			pitch: 60,
			bearing: -45
		}
	];
</script>

<Slideshow {positions} buttons>
	<BigText index={0}>A slideshow...</BigText>
	<BigText index={1}>...that's not just a slideshow</BigText>
	<BigText index={2}>But an experience!</BigText>
	<BigText index={3}>Flying over the world</BigText>
	<BigText index={4}>Seeing stuff</BigText>
	<BigText index={5}>And even more stuff</BigText>
	<BigText index={6}>So cool</BigText>
	<BigText index={7}>Image the possibilities</BigText>
</Slideshow>
