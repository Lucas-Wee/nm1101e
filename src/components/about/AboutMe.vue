<template>
    <div>
        <!-- Filters and Title -->
        <div class="flex justify-between items-center mb-5">
            <!-- Title "EXPLORE" with Icon -->
            <div class="flex items-center">
                <font-awesome-icon :icon="['fab', 'wpexplorer']" size="2x"
				bounce style="color: #000000;" class="mr-2" />
				<!-- Font Awesome Icon -->
                <h1 class="text-4xl font-bold">Explore the dialects!</h1>
            </div>
            
            <!-- Filter Section -->
            <div class="flex items-center">
                <!-- Filter Funnel Icon -->
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png" 
				alt="Filter" class="mr-2 h-8 w-8" />
                <!-- Filter Dropdown -->
                <select class="border rounded-lg p-2">
                    <option value="popularity">Popularity</option>
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	setup() {
		return {

		};
	}
};
</script>

<style>
/* Add any additional CSS styling here */
</style>
