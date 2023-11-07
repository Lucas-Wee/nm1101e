<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getCategoryClass(category) {
            switch (category.toLowerCase()) {
                case 'beginner':
                    return 'beginner-color';
                case 'intermediate':
                    return 'intermediate-color';
                case 'advanced':
                    return 'advanced-color';
                default:
                    return '';
            }
        },
    },
};
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-3xl text-ternary-dark dark:text-ternary-light font-semibold mb-3"
			>
				{{ project.title }}
			</p>
        <!-- Display the category and dialect -->
        <div class="category-dialect">
            <span :class="getCategoryClass(project.category)">
                {{ project.category }}
            </span>
            <span class="dialect-info"> | {{ project.dialect }}</span>
        </div>
		</div>
	</router-link>
</template>

<style>

.beginner-color {
    background-color: rgb(116, 215, 116);
}

.intermediate-color {
    background-color: orange;
}

.advanced-color {
    background-color: rgb(244, 94, 94);
}

.category-dialect {
    /* Add your styling for the category and dialect container */
    font-size: 1.2em;

    margin-top: 0.5em;
}

.dialect-info {
    /* Add your styling for the dialect information */
    margin-left: 0.5em;
	font-size: 1.2em;
    color: #666; /* Example color */
}
.project-title {
    font-size: 1.5em; /* Adjust this value as needed */
}
/* Other styles for ProjectSingle */
</style>
