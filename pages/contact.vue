<template>
	<section class="container">
		<v-vision />
		<v-contact />
	</section>
</template>

<script>
	import vision from "~/components/masterVision.vue";
	import contact from "~/components/contactTable.vue";
	
	export default {
		components: {
			vVision: vision,
			vContact: contact
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/global/config.scss';
</style>
