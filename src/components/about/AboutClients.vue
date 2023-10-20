<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Top Trending Dialect Shows',
			clients: [
				{
					id: 1,
					title: 'Amazon',
					img: "https://m.media-amazon.com/images/M/MV5BMDMzYzk4NjctMTQwMi00MDJjLTkwMGYtNGYyNGM1MWM0MzE4XkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_.jpg",
				},
				{
					id: 2,
					title: 'Sony',
					img: "https://www.chinoy.tv/wp-content/uploads/2021/01/U-Motherbaker-212x300.png",
				},
				{
					id: 3,
					title: 'Adidas',
					img: "https://www.chinoy.tv/wp-content/uploads/2021/01/Coolie-200x300.jpg",
				},
				{
					id: 4,
					title: 'FILA',
					img: "https://www.chinoy.tv/wp-content/uploads/2021/01/Q-Series-A-Boy-Named-Flora-A-213x300.jpg",
				},
				{
					id: 5,
					title: 'NB',
					img: "https://m.media-amazon.com/images/M/MV5BNTRlZjJkYWMtMjhmYy00NWI0LWIwMTAtMTg5MmVhMDI2YzcxXkEyXkFqcGdeQXVyMDU2NjAwNg@@._V1_.jpg",
				},
				{
					id: 6,
					title: 'SAMSUNG',
					img: "https://m.media-amazon.com/images/M/MV5BOTUwYzhhNTUtZTc4MC00ZjY1LWE2MTUtOGQxMjkyMGQ4YzczXkEyXkFqcGdeQXVyMzAzMzkzNTU@._V1_.jpg",
				},
				{
					id: 7,
					title: 'CANON',
					img: "https://m.media-amazon.com/images/M/MV5BYjNjNzA1OTEtODZmNy00MjUwLWEwNDMtYjE1YzA0MjRlYjJiXkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_.jpg",
				},
				{
					id: 7,
					title: 'PUMA',
					img: "https://m.media-amazon.com/images/M/MV5BMjcwMDE4ZTAtODQ1Mi00YmM0LThhZjQtOGM4YjdiNzU3MWY2XkEyXkFqcGdeQXVyMzUwNTM0NjE@._V1_.jpg",
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
