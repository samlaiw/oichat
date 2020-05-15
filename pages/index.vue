<template>
	<section class="container">
		<v-vision />
		<v-swiper />
		<v-notice />
		<v-category />
	</section>
</template>

<script>
	import vision from "~/components/masterVision.vue";
	import swiper from "~/components/swiper.vue";
	import notice from "~/components/notice.vue";
	import category from "~/components/category.vue";

	export default {
		components: {
			vVision: vision,
			vSwiper: swiper,
			vNotice: notice,
			vCategory: category
		}
	}
</script>
