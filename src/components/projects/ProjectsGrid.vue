<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data: () => {
		return {
			projects,
			projectsHeading: 'Dialect Classes',
			selectedCategory: '',
			selectedDialect: '',
			searchProject: '',
		};
	},
	computed: {
    filteredProjects() {
        let filtered = this.projects;

        if (this.selectedCategory) {
            filtered = this.filterProjectsByCategory(filtered);
        }

        if (this.selectedDialect) {
            filtered = this.filterProjectsByDialect(filtered);
        }

        if (this.searchProject) {
            filtered = this.filterProjectsBySearch(filtered);
        }

        return filtered;
    },
},
methods: {
    filterProjectsByCategory(filteredProjects) {
        return filteredProjects.filter((item) => {
            let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
            return category.includes(this.selectedCategory);
        });
    },
    filterProjectsByDialect(filteredProjects) {
        return filteredProjects.filter((item) => item.dialect === this.selectedDialect);
    },
    filterProjectsBySearch(filteredProjects) {
        let project = new RegExp(this.searchProject, 'i');
        return filteredProjects.filter((el) => el.title.match(project));
    },
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
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and ts -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search classes by title or filter by category
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Classes"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
	>
		<ProjectSingle
			v-for="project in filteredProjects"
			:key="project.id"
			:project="project"
			:class="getCategoryClass(project.category)"
		/>
	</div>
	</section>
</template>

<style scoped>
.filters {
    display: flex;
    /* Add any additional styling here */
}
.filter-select {
    /* Styling for select elements */
}
/* Other styles... */
</style>

