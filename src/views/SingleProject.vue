<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Essential Greetings',
				singleProjectDate: 'Updated Jul 26, 2023',
				singleProjectTag: 'Beginner',
				singleProjectTag2: 'Hokkien Dialect',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: 'https://media.istockphoto.com/id/1363793017/photo/asian-family-with-two-children-taking-a-walk-in-city-park.jpg?s=612x612&w=0&k=20&c=r8i3sJOUOaqxing9pLIP_yzmYqFBC9o-PA6NjRptT_w=',
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: 'https://media.istockphoto.com/id/1297931559/photo/asian-chinese-family-and-cousins-having-reunion-dinner-at-home.jpg?s=612x612&w=0&k=20&c=Ldqi1Efyz7vVizdvYbKL9Rkepv_V8SeBBTCYJtXj140=',
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: 'https://media.istockphoto.com/id/851452718/photo/happy-asian-business-team-working-together-in-office.jpg?s=612x612&w=0&k=20&c=2GCQcWhuI1vgWEkHQtfh8WtKsXedT8ddNTMt63gtGtg=',
				},
			],
			projectInfo: {
				objectivesHeading: 'Summary',
				objectivesDetails: 'In this package, you will master the art of greetings in your chosen dialect. Learn how to say "hello," "goodbye," and exchange polite pleasantries. Get ready to impress your family and friends with your warm dialect greetings.',
				technologies: [
					{
						title: 'Rating: 4.3★',
						techs: [
							'5k+ Reviews'
						],
					},
				],
				projectDetailsHeading: 'Course Description',
				projectDetails: [
					{
						id: 1,
						details:
							''},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Lessons',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
