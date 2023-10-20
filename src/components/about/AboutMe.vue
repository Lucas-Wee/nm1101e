<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Explore with us!'},
				{
					id: 2,
					bio:
						'Hui Lin best TA!'},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="https://i.pinimg.com/originals/36/ce/63/36ce6331e0cbed74f9ddc21a16e233f1.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
