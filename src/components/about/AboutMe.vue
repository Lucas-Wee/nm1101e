<template>
    <div>
        <!-- Filters and Title -->
        <div class="flex justify-between items-center mb-5">
            <!-- Title "EXPLORE" with Icon -->
            <div class="flex items-center">
                <font-awesome-icon :icon="['fab', 'wpexplorer']" size="2x"
				bounce style="color: #000000;" class="mr-2" />
                <h1 class="text-4xl font-bold">Explore the dialects!</h1>
            </div>
            
            <!-- Filter Section -->
            <div class="flex items-center">
                <!-- Filter Funnel Icon -->
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png" 
				alt="Filter" class="mr-2 h-8 w-8" />

                <!-- First Filter Dropdown -->
                <select class="border rounded-lg p-2 mr-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                    <option value="most-viewed">Most Viewed</option>
                    <option value="highest-rating">Highest Rating</option>
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </select>

                <!-- Second Filter Dropdown for Categories -->
                <select class="border rounded-lg p-2 mr-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                    <option value="movies">Movies</option>
                    <option value="blogs">Blogs</option>
                    <option value="songs">Songs</option>
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
