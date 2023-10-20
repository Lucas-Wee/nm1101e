<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'NM1101E Prototype',
			author: 'Lucas',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://nusmods.com/courses/NM1101E/communications-new-media-and-society"
				target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fz9jw41zhkcw61.gif%3Fwidth%3D1920%26auto%3Dwebp%26s%3D4731b68924aa1dc232abed173d53efc18bd3f6c3"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
