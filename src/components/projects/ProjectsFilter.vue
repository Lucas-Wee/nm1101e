<script>
export default {
    props: {
        select: {
            type: String,
            default: 'projects',
            required: true,
        },
        selectOptions: {
            type: Array,
            default: () => ['Beginner', 'Intermediate', 'Advanced'],
        },
        dialectOptions: {
            type: Array,
            default: () => ['Hokkien', 'Teochew', 'Cantonese'],
        },
    },
    data: () => {
        return {
            selectedDialect: '', // New data property for selected dialect
        };
    },
    methods: {
        handleCategoryChange(event) {
            this.$emit('filter-category', event.target.value);
        },
        handleDialectChange(event) {
            this.selectedDialect = event.target.value;
            this.$emit('filter-dialect', this.selectedDialect);
        },
		
		getColor(category) {
			switch (category) {
				case 'Beginner':
					return 'lightgreen';
				case 'Intermediate':
					return 'lightorange';
				case 'Advanced':
					return 'lightred';
				default:
					return 'none'; // default color
			}
		},
	},
};
</script>

<template>
    <div class="filters-container">
        <!-- Category Filter -->
        <select
            @change="handleCategoryChange"
            :name="select"
            :id="select"
            class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
        >
            <option value class="text-sm sm:text-md">All Levels</option>
            <option
                v-for="option in selectOptions"
                :key="option"
                :value="option"
                class="sm:text-md"
            >
                {{ option }}
            </option>
        </select>

        <!-- Dialect Filter -->
        <select
            @change="handleDialectChange"
            class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
        >
            <option value class="text-sm sm:text-md">All Dialects</option>
            <option
                v-for="dialect in dialectOptions"
                :key="dialect"
                :value="dialect"
                class="sm:text-md"
            >
                {{ dialect }}
            </option>
        </select>
    </div>
</template>

<style>
.filters-container {
    display: flex;
    gap: 10px; /* Add a gap between the filters */
    /* Additional styling for layout */
}

/* You can remove .filter-select and .filter-option if they are not needed */
</style>

