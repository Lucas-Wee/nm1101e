<script>
import quizImage from '@/assets/images/quiz.png';

export default {
	props: ['singleProjectHeader'],
	data() {
		return {
			showPopup: false,
			quizImage: quizImage
		}
	}
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<div class="header-with-button">
			<p class="project-title">
				{{ singleProjectHeader.singleProjectTitle }}
			</p>

			<!-- Quiz Button -->
			<button class="quiz-button" @click="showPopup = true">Quiz</button>
		</div>
    <!-- Full Page Popup -->
    <div v-if="showPopup" class="full-page-popup">
      <button class="close-button" @click="showPopup = false">Close</button>
      <!-- Image as Quiz Content -->
      <img :src="quizImage" alt="Quiz" class="quiz-content-image">
    </div>

		<!--HEADER TAGS -->
		<div class="flex">
    <div class="flex items-center mr-10">
        <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
        <span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{ singleProjectHeader.singleProjectDate }}</span>
    </div>
    <div class="flex items-center">
        <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
        <span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{ singleProjectHeader.singleProjectTag }}</span>
    </div>
    
    <!-- Added margin-left here -->
    <div class="flex items-center ml-4">
        <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
        <span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{ singleProjectHeader.singleProjectTag2 }}</span>
    </div>
</div>
	</div>
</template>

<style>
.header-container {
	display: flex;
	align-items: center; /* This ensures vertical alignment */
	justify-content: space-between; /* This spreads out your header content and button */
	padding: 20px; /* Add padding as necessary */
}

.header-with-button {
    display: flex;
    justify-content: space-between; /* This will push the title and button to opposite ends */
    align-items: center; /* This will vertically align them */
}

.project-title {
	font-family: 'Your Font Family', sans-serif; /* Replace with your font */
	font-size: 45px; /* Adjust as needed */
	font-weight: bold;
	color: #333; /* Replace with your color */
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	text-align: left;
}

.quiz-button {
	background-color: #ff8000; /* Modern blue color */
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.3s;
}

.quiz-content-image {
    max-width: 100%; /* ensures the image is not larger than the popup */
    height: auto; /* maintains the aspect ratio of the image */
  }
  

.quiz-button:hover {
	background-color: #0056b3; /* Darker blue on hover */
	transform: scale(1.05); /* Slightly enlarge on hover for a modern feel */
}

.full-page-popup {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
	z-index: 1000; /* Ensure it's on top of other content */
	display: flex;
	align-items: center;
	justify-content: center;
}

.close-button {
	position: absolute;
	top: 20px;
	right: 20px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	background-color: #ff0000; /* Red close button */
	color: white;
	cursor: pointer;
}
</style>