<template>
  <section class="container">
      <v-vision />
      <coupon-table />
  </section>
</template>

<script>
    import vision from "~/components/masterVision.vue";
    import couponTable from "~/components/couponTable.vue";

	export default {
		components: {
            vVision: vision,
            couponTable: couponTable
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/global/config.scss';
</style>
